 <template>
  <div>
        <p>{{detailDestination.deskripsi}}</p>
    </div>
</template>

<script>
export default {
    name: 'DescriptionDestination',
    props: {
        detailDestination: {
            type: Object,
            required: true
        }
    },
}
</script>

<style>

</style>