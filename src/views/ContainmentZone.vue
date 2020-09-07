<template>
    <div class="route-container">
        <h3>Containment Zone</h3><br /><br />
        You will be redirected to containment zone map in 3 seconds
    </div>
</template>

<script>

export default {
    name: "SD-1",
    data() {
        return {
            currentData: null,
        }
    },
    mounted() {
        setTimeout(() => {
            window.location.href = 'https://maps.delhivery.com/covid/'
        }, 3000);
    }
}
</script>