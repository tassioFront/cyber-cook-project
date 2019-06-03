<template>
<!-- it was defined as footer tag because is the last content of PSD, otherwise, it will be defined as aside tag -->
    <footer>
        <h2>#FoodieFeed</h2>
        <h4>As tendências na cozinha, inovações na alimentação e muito mais.</h4>
        <section class="feeds">
            <article class="feeds-content"  v-for="feed in feeds" :key="feed.title">
                <a :href='feed.link'>
                    
                    <img :src="feed.image" :alt="feed.title">
                    
                </a>
                <h3> {{ feed.title }} </h3>

            </article>
        </section>

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

    footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .feeds {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    footer h2 {
        margin: 0%;
        font-size: 1.25rem;
        color: #1e8367;
    }
    footer h3, h4 {
        font-size: 0.8rem;
        margin: 1% 0%;
    }

    footer h4 {
        color: #474747;
        font-weight: 400;
    }


    .feeds-content {
        width: 21.79%;
    }

    .feeds-content img {
        width: 100%;
        height: 161px;
    }

    /* 

    .recipes-section-content-detail {
        position: absolute;
        left: 2%;
        z-index: 100;
    }

    .recipes-section-content-detail h3 {
        margin: 0%;
        font-size: 0.8rem;
        color: #fff;
        text-shadow: 1px 1px #191919;
        margin-bottom: 8px;
        cursor: pointer;
    } */

</style>
