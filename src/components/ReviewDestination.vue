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
          ]
        }
    },
    methods: {
        addReview() {
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
          console.log(error);
          throw new Error(error);
        })
      }
    },
    created() {
      this.getReview();
    }
}
</script>

<style>

</style>