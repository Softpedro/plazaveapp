<template>
    <div>
        <div class="detail">
            <figure class="detail__image">
                <img
                    :src="promo.image"
                    alt=""
                    width="577"
                    height="313"
                    >
            </figure>
            <div class="detail__avatar">
                <img
                    :src="promo.user.avatar"
                    alt=""
                    width="65"
                    height="65"
                    >
                <span>{{ promo.user.firstName }} {{ promo.user.lastName }}</span>
            </div>
            <div class="detail__content">
                <p>{{ promo.description }}</p>
                <span>Publicado a las 12:30AM</span>
            </div>
            <div class="detail__buttons">
                <button
                    class="detail__buttons--reservation"
                    @click="commingsoon"
                    >Reservar</button>
                <button @click="commingsoon" class="detail__buttons--valoration">
                    <span>16</span>
                    <img src="~/static/images/icon-heart.svg" alt="">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        props: {
            promo:{
                type: Object
            }
        },
        methods: {
            commingsoon(){
                alert('Próximamente')
            }
        }
    }
</script>

<style scoped lang="scss">
    .detail{
        max-width: 577px;
        margin: auto;
        margin-top: 50px;
        &__image{
            margin-bottom: 40px;
            img{
                display: block;
                max-width: 100%;
                object-fit: cover;
                border: 1px solid #DCDCDC;
                border-radius: 5px;
            }
        }
        &__avatar{
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            img{
                margin-right: 23px;
                object-fit: cover;
                border-radius: 50%;
            }
            span{
                color: #383838;
            }
        }
        &__content{
            margin-bottom: 30px;
            p{
                line-height: 21px;
                font-size: 14px;
                margin-bottom: 30px;
                color: #434343;
            }
            span{
                font-size: 14px;
                color: #434343;
            }
        }
        &__buttons{
            display: flex;
            &--reservation{
                width: 245px;
                height: 45px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                background-color: #FC2016;
                border: none;
                border-radius: 45px;
                margin-right: 15px;
                cursor: pointer;
            }
            &--valoration{
                display: flex;
                align-items: center;
                width: 90px;
                height: 45px;
                justify-content: center;
                border-radius: 45px;
                border: none;
                cursor: pointer;
                background-color: #EAEAEA;
            }
        }
    }
    @media screen and (max-width: 768px){
        .detail{
            width: 90%;
        }
    }
</style>
