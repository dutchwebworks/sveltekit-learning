<script>
    import "$lib/css/style.css"
    import Header from "$components/TheHeader.svelte";
    import Footer from "$components/TheFooter.svelte";
</script>

<div class="wrapper">
    <Header />
    
    <slot />

    <Footer />
</div>

<style>
.wrapper {
    max-width: 768px;
    margin: 0 auto;
}
</style>