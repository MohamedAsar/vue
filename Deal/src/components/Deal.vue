<template>
  <div class="Deal">
    <div class="row">
      <div class="col-sm-4">
        <p>
          Deal No :- 
          <span>{{deals.no}}</span>
        </p>
        <p>
          Opportunity :- 
          <span>{{deals.Opportunity}}</span>
        </p>
      </div>
      <div class="col-sm-4">
        <p>
          Deal Description :- 
          <span>{{deals.description}}</span>
        </p>
        <p>
          Created By :- 
          <span>{{deals.creter}}</span>
        </p>
      </div>
      <div class="col-sm-4">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Deal',
  data () {
    return {
      deals: {
        no: 123456,
        Opportunity: 'DCF5467',
        description: 'for testing sample deal creation',
        creter: 'test'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Deal{
    padding: .5rem 1rem;
    border: 1px solid #f8f9fa;
  }
  .row .col-sm-4{
    border-right: 1px solid #ddd;
  }
   .row .col-sm-4:last-child{
     border: none;
   }
   p{
     font-size: 16px;
    font-weight: 600;
   }
   p span{
     float: right;
    width: 50%;
    text-align: right;
   }
</style>
