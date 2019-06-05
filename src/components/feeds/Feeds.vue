<template>
<!-- it was defined as footer tag because it is the last content of PSD, otherwise, it will be defined as aside tag -->
    <footer>

        <h2>#FoodieFeed</h2>
        <h4>As tendências na cozinha, inovações na alimentação e muito mais.</h4>
        
        <section class="feeds">
            <article class="feeds-content"  v-for="feed in feeds" :key="feed.title">
                <a :href='feed.link'> 
                    <img :src="feed.image" :alt="feed.title">
                </a>
                <a :href='feed.link'>
                <h3> {{ feed.title }} </h3>
                </a>
            </article>
        </section>

    </footer>

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

<style scoped>
    footer {
        justify-content: flex-start;
    }

    .feeds, .feeds-content img {
        width: 100%;
    }

    .feeds {
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
        font-size: 0.75rem;
        margin: 1% 0%;
        color: #474747;
    } 

    footer h4 {
        font-weight: 400;
    }

    .feeds-content {
        width: 22.5%;
    }

    .feeds-content img {
        height: 161px;
    }

    /* tablet and other */
    @media(max-width: 768px) {
    .feeds {
        justify-content: space-around;

    }

    .feeds-content {
    width: 48%;
        min-width: 267px;
    }

    .feeds-content img {
        height: 200px;
    }
  }
</style>
