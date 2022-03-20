<template>
  <v-app class="d-xs" >
      <header-app />
          <v-main class="d-xs mx-auto overflow-y-auto elevation-4 pb-4" style="width: 100%">
    <v-container style="max-width: 600px; margin: auto" fluid fill-height>
        <v-row align="center">
            <v-col cols="12" align-self="center" class="d-flex-row align-center justify-center">
                <div class="py-20 px-10">
                <h1 class="text-center">Add Review</h1>
                <v-form
                    ref="form"
                    v-model="valid"
                    v-on:submi.prevent="submit"
                    lazy-validation
                >

                    <v-text-field
                    v-model="rating"
                    type="number"
                    max="5"
                    min="1"
                    step="0.1"
                    :rules="ratingRules"
                    label="Rating"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="review"
                    :rules="reviewRules"
                    label="Review"
                    required
                    ></v-text-field>

                    
                    <div class="d-flex justify-center align-center pt-5">
                    <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="submit"
                    @keypress="submit"
                    >
                    Save
                    </v-btn>
                    <v-btn
                    color="warning"
                    class="mr-4"
                    @click="back"
                    >
                    Back
                    </v-btn>
                    </div>
                </v-form>
                </div>
                
            </v-col>
        </v-row>
    </v-container>    
              </v-main>


      <menu-bar/>
  </v-app>
</template>

<script>
        import HeaderApp from './HeaderApp.vue'
        import MenuBar from './MenuBar.vue'

export default {
    name: 'AddReview',
    components: {
        'header-app': HeaderApp,
        'menu-bar': MenuBar,
    },
    data() {
        return {
            valid: true,
            review: '',
            reviewRules: [
                v => !!v || 'Review is required',
            ],
            rating: 0,
            ratingRules: [
                v => !!v || 'Rating is required',
            ],
        }
    },
    methods: {
        submit() {
        if (this.valid) {
          const data = {
          rating: this.rating,
          review: this.review,
        };
        try {
        let url = 'https://suggesttour.herokuapp.com';
        if(window.location.href.match(/localhost/g)) {
          url = 'https://suggesttour.herokuapp.com';
        } else {
          url = 'https://suggesttour.herokuapp.com';
        }
           this.$http.post(`${url}/api/Review`, data)
           .then(response => {
             if(response.ok) {
                  this.$toast.open({
                    message: 'Success Create Review',
                    type: 'success',
                    position: 'top-right',
                });
                
                setTimeout(() => {
                  this.$refs.form.reset();
                  this.$router.push('/home/detail/' + this.$route.query.id_destination);
                }, 2000);
             }
           })
        } catch(error){
            this.$toast.open({
                message: 'Something wrong!',
                type: 'error',
                position: 'top-right',
            });
          throw new Error(error);
        }
        }

        },
        back() {
            this.$router.push('/home/detail/' + this.$route.query.id_destination);
        },
        doGetCurrentReview() {
            const pathParam = this.$route.path.split('/');
            if (pathParam[3] !== undefined) {
            try {
                let url = 'https://suggesttour.herokuapp.com';
                if(window.location.href.match(/localhost/g)) {
                  url = 'https://suggesttour.herokuapp.com';
                } else {
                  url = 'https://suggesttour.herokuapp.com';
                }
                this.$http.get(`${url}/api/Review/${pathParam[3]}`)
                .then(response => {
                    if(response.ok) {
                        this.review = response.body.review;
                        this.rating = response.body.rating;
                    }
                })
            } catch(error) {
                this.$toast.open({
                    message: 'Something wrong!',
                    type: 'error',
                    position: 'top-right',
                });
                throw new Error(error);
            }   
            }
        }
    },
    created() {
        this.doGetCurrentReview();
    }
}
</script>

<style scoped>

</style>