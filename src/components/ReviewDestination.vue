 <template>
  <div>
    <div class="d-flex justify-center align-center pb-4">
      <v-btn
        depressed
        color="primary"
        class=""
        @click="addReview"
      >
        Tambah review
      </v-btn>
    </div>
    <v-row v-if="loading">
      <v-col cols="12">
        <v-skeleton-loader
          class="mx-auto"
          type="list-item-avatar-three-line"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <div v-if="!loading">
    <div
      v-for="review in dataReview"
      :key="review.id"
    >
      <v-container>
        <v-row>
          <v-col
            cols="2"
            class="pb-0 pr-0 pl-0"
          >
            <v-img
              :alt="review.name"
              :src="review.image"
              max-width="100"
              class="rounded-circle"
            ></v-img>
          </v-col>
          <v-col cols="10">
            <div class="d-flex justify-space-between">
              <p>{{review.name}}</p>
              <div class="d-flex">
                <v-rating
                  :value="review.rating"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
                <small style="color: #616161;">({{review.rating}})</small>
              </div>
            </div>
            <p>{{review.review}} <small style="color: #616161;">({{review.date}})</small></p>
            <div
              v-if="review.currentUser"
              class="d-flex justify-end align-center"
            >
              <v-icon
                right
                style="cursor: pointer"
                color="green"
                @click="onUpdateReview(review.id)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                right
                style="cursor: pointer;"
                color="red"
                @click="onDeleteReview(review.id)"
              >
                mdi-delete
              </v-icon>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <hr class="mt-2 mb-2">
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ReviewDestination",
  props: {
    idDestination: {
      type: String,
      required: true,
    },
    review: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["baseUrl"]),
  },
  data() {
    return {
      loading: true,
      dataReview: this.review.map((item) => {
        return {
          id: item.id,
          name: item.user.name,
          image:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          rating: +item.rating,
          review: item.review,
          date: new Date(item.updated_at).toLocaleDateString(),
          user_id: item.user.id,
        };
      }),
    };
  },
  methods: {
    addReview() {
      this.$router.push({
        path: "/home/review",
        query: { id_destination: this.idDestination },
      });
    },
    onUpdateReview(id) {
      this.$router.push({
        path: "/home/review/" + id,
        query: { id_destination: this.idDestination },
      });
    },
    checkUserLogin() {
      const user = localStorage.getItem("user");
      const data = JSON.parse(user) || null;
      this.dataReview = this.dataReview.map((item) => {
        if (data.id === item.user_id) {
          item.currentUser = true;
        } else {
          item.currentUser = false;
        }
        return item;
      });

      setTimeout(() => {
        this.loading = false
      }, 2000);
    },
    onDeleteReview(id) {
      this.$http
        .delete(`${this.baseUrl}/api/Review/${id}`)
        .then((response) => {
          if (response.ok) {
            this.$toast.open({
              message: "Berhasil menghapus review",
              type: "success",
              position: "top-right",
            });
            this.dataReview = this.dataReview.filter((item) => {
              return item.id !== id;
            });
          }
        })
        .catch((error) => {
          this.$toast.open({
            message: "Error Delete",
            type: "error",
            position: "top-right",
          });
          throw new Error(error);
        });
    },
  },
  created() {
    this.checkUserLogin();
  },
};
</script>

<style>
</style>