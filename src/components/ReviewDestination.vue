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
</template>

<script>
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
  data() {
    return {
      dataReview: this.review.map((item) => {
        return {
          id: item.id,
          name: item.user.name,
          image:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          rating: item.rating,
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
    //   getReview() {
    //   let url = 'https://suggesttour.herokuapp.com';
    //   const path = this.$route.params.id;
    //   if(window.location.href.match(/localhost/g)) {
    //     url = 'https://suggesttour.herokuapp.com';
    //   } else {
    //     url = 'https://suggesttour.herokuapp.com';
    //   }
    //   this.$http.get(`${url}/api/Review/${path}`).then(response => {
    //     this.detailDestination = response.body;
    //   }).catch(error => {
    //     throw new Error(error);
    //   })
    // },
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
    },
    onDeleteReview(id) {
      let url = "https://suggesttour.herokuapp.com";
      if (window.location.href.match(/localhost/g)) {
        url = "https://suggesttour.herokuapp.com";
      } else {
        url = "https://suggesttour.herokuapp.com";
      }
      this.$http
        .delete(`${url}/api/Review/${id}`)
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