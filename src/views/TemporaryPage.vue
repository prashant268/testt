<template>
  <div class="table-container">
      This is temporary page.
  </div>
</template>

<script>

export default {
    name: "SD-3",
    data() {
        return {
            users: Data,
        }
    },
    methods: {
        handleSelected(obj) {

            console.log(obj)
            if (obj.tr.link !== undefined) {
                this.$vs.notify({
                    title:`Please Wait`,
                    text:`Redirecting to: ${obj.tr.link}`
                })
    
                setTimeout(() => {
                    window.location.href = obj.tr.link;
                }, 3000)
            }

            else {
                this.$router.push(`/sd-3/${obj.indextr}`)
            }
        }
    }
}
</script>
