<template>
  <section class="sales">
    <div class="sales__title">
        <h5>Últimas promociones</h5>
    </div>
    <div class="sales__list" id="listPromos">
        <article
            v-for="(promo, index) in promos"
            :key="index"
            class="sales__list--item"
        >
            <NuxtLink to="/detail/2" class="salesItem">
                <div class="salesItem__image">
                    <figure class="salesItem__image--wrap">
                        <img
                            :src="promo.image"
                            alt=""
                            width="248"
                            height="106"
                            class="salesItem__image--img"
                        >
                    </figure>
                    <img
                        :src="promo.user.avatar"
                        alt=""
                        class="salesItem__image--icon"
                        width="40"
                        height="40"
                        >
                </div>
                <div class="salesItem__content">
                    <h5>{{ promo.title }}</h5>
                    <p>{{ promo.description }}</p>
                </div>
            </NuxtLink>
        </article>
        <div class="loader" v-if="loading">
            <span></span>
        </div>
    </div>
  </section>
</template>

<script>


export default {
  name: 'Sales',
  data(){
    return {
    }
  },
  props: {
    promos: {
        type: Array
    },
    loading: {
        type: Boolean
    }
  }
}
</script>

<style lang="scss">
  .sales{
    max-width: 580px;
    margin: auto;
    &__title{
        margin-bottom: 30px;
        margin-top: 50px;
        h5{
            font-size: 18px;
        }
    }
    &__list{
        &--item{
            margin-bottom: 30px;
        }
    }
  }

  .salesItem{
    padding: 20px 20px 20px 20px;
    display: flex;
    color: black;
    text-decoration: none;
    max-width: 577px;
    transition: all .25s ease;
    border-radius: 12px;
    box-sizing: border-box;
    border: 1px solid transparent;
    &:hover{
        border-top: 1px solid rgb(90 90 90 / 15%);
        border-left: 1px solid rgb(90 90 90 / 15%);
        box-shadow: 2px 4px 5px rgb(90 90 90 / 15%);
    }
    &__image{
        margin-right: 40px;
        position: relative;
        &--img{
            object-fit: cover;
            object-position: center;
            border-radius: 5px;
            overflow: hidden;
        }
        &--icon{
            position: absolute;
            right: 0;
            bottom: -8px;
            filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
            border-radius: 50%;
            overflow: hidden;
        }
    }
    &__content{
        max-width: 248px;
        h5{
            font-size: 14px;
            margin-bottom: 5px;
            line-height: 21px;
            margin-top: 5px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        p{
            font-size: 12px;
            line-height: 18px;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }
  }
  @keyframes mov{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
  }
  .loader{
    span{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 6px solid black;
        border-top-color: red;
        display: block;
        animation: 1s mov ease infinite;
        margin: auto;
    }
  }
  @media screen and (max-width: 768px){
    .sales{
        width: 90%;
    }
    .salesItem{
        flex-direction: column;
        &__image{
            margin: 0;
            margin-bottom: 20px;
            &--img{
                width: 100%;
                height: auto;
            }
        }
        &__content{
            width: 100%;
            max-width: 100%;
            h5{
                white-space: pre-wrap;
            }
            p{
                display: block;
            }
        }
    }
  }
</style>