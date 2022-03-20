 <template>
  <div>
                <div class="d-flex justify-center align-center pb-4">
              <v-btn
                depressed
                color="primary"
                class=""
                @click="addReview"
              >
                Add review
              </v-btn>
              </div>
          <div v-for="review in dataReview" :key="review.id">
            <v-container>
            <v-row>
              <v-col cols="2">
                <v-img :alt="review.name" :src="review.image"  max-width="70" class="rounded-circle"></v-img>
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
                    <div v-if="review.currentUser" style="cursor: pointer" @click="onUpdateReview(review.id)"> 
                    <v-icon right>
                    mdi-pencil
                      </v-icon></div>
                    </div>
                </div>
                <p>{{review.review}} <small style="color: #616161;">({{review.date}})</small></p>
              </v-col>
            </v-row>
            </v-container>
            <hr class="mt-2 mb-2">
          </div>
  </div>
</template>

<script>
export default {
    name: 'ReviewDestination',
    props: {
      idDestination: {
        type: String,
        required: true,
      },
    },
    data() {
        return {
          dataReview : [
            {
              id: 1,
              name: 'B. Pamungkas',
              review: 'Tempatnya bagus sih, mantap',
              rating: 4.5,
              image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
              date: new Date().toLocaleDateString()
            },
            {
              id: 2,
              name: 'Putra',
              review: 'Tempatnya bagus sih, mantap',
              rating: 4.5,
              image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
              date: new Date().toLocaleDateString()

            },
            {
              id: 3,
              name: 'Putri',
              review: 'Tempatnya bagus sih, mantap',
              rating: 4.5,
              image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
              date: new Date().toLocaleDateString()

            },
            {
              id: 4,
              name: 'Putraa',
              review: 'Tempatnya bagus sih, mantap',
              rating: 4.5,
              image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
              date: new Date().toLocaleDateString()

            },
          ],
          currentUser: false
        }
    },
    methods: {
        addReview() {
          this.$router.push({path: '/home/review', query: {id_destination: this.idDestination}});
        },
        onUpdateReview(id) {
          this.$router.push({path: '/home/review/' + id, query: {id_destination: this.idDestination}});
        },
        getReview() {
        let url = 'https://suggesttour.herokuapp.com';
        if(window.location.href.match(/localhost/g)) {
          url = 'https://suggesttour.herokuapp.com';
        } else {
          url = 'https://suggesttour.herokuapp.com';
        }
        this.$http.get(`${url}/api/Review`).then(response => {
          this.detailDestination = response.body;
        }).catch(error => {
          throw new Error(error);
        })
      },
      checkUserLogin() {
        const user = localStorage.getItem('user');
        const data = JSON.parse(user) || null;
        this.dataReview = this.dataReview.map(item => {
          if (data.id === item.id) {
          item.currentUser = true;
          }  else {
          item.currentUser = false;
          }
          return item;
        })
      }
    },
    created() {
      this.getReview();
      this.checkUserLogin();
    }
}
</script>

<style>

</style>