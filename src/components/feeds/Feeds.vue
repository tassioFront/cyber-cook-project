<template>
<!-- it was defined as footer tag because is the last content of PSD, otherwise, it will be defined as aside tag -->
    <footer class="">
        <article class="" v-for="feed in feeds" :key="feed.title">
            <a :href='feed.link'>
                <img :src="feed.image" :alt="feed.title">
            </a>

        </article>

    </footer>
<!-- {
		  "image": "https://img.cybercook.uol.com.br/foodiefeed/n2td1evxdiakmo04nlzv5x0iinh252hza3h4cq5j.jpeg",
		  "title": "5 vantagens de fazer mercado online  no Fim de Ano",
      "link": "https://cybercook.uol.com.br/5-vantagens-de-fazer-mercado-online-no-fim-de-ano-m-310-2169.html"
	  }, -->
</template>
<script>
import feeds from '../../../public/cybercook.json'

export default {
    data() {
        return {
            feeds: feeds.foodiefeed
        }
    }
}
</script>

<style>

</style>
