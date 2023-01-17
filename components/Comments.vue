<!-- Please remove this file from your project -->
<template>
    <div class="comments">
        <div class="comments__wrap">
            <div class="comments__title">
                <p>Comentarios</p>
            </div>
            <div class="comments__list">
                <div class="comments__list--item">
                    <figure class="comments__image">
                        <img src="~/static/images/profile_img.png" alt="">
                    </figure>
                    <div class="comments__text">
                        <h4>Tom Holland</h4>
                        <p>Muchas gracias Indra, realmente me ayudaste con la compra de ese producto. Estoy muy feliz con la nueva tele para mi casa :3</p>
                    </div>
                </div>
                <div class="comments__list--item">
                    <figure class="comments__image">
                        <img src="~/static/images/profile_img.png" alt="">
                    </figure>
                    <div class="comments__text">
                        <h4>Tom Holland</h4>
                        <p>Muchas gracias Indra, realmente me ayudaste con la compra de ese producto. Estoy muy feliz con la nueva tele para mi casa :3</p>
                    </div>
                </div>
            </div>
            <div class="comments__textarea">
                <textarea name="" id="" cols="10" rows="1" placeholder="Escribe un comentario..."></textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Comments',
  data() {
    return {
    }
  },
}
</script>

<style scoped lang="scss">
    .comments{
        max-width: 577px;
        margin: auto;
        margin-top: 44px;
        &__wrap{
            padding: 20px 30px;
            background-color: rgba(196, 196, 196, 0.1);
        }
        &__title{
            margin-bottom: 16px;
            p{
                font-size: 16px;
                color: #434343;
            }
        }
        &__list{
            &--item{
                display: flex;
                margin-bottom: 40px;
                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
        &__image{
            margin-right: 10px;
        }
        &__text{
            h4{
                font-size: 12px;
                margin-bottom: 6px;
                line-height: 19px;
            }
            p{
                font-size: 10px;
                color: #434343;
                line-height: 15px;
            }
        }
        &__textarea{
            margin-top: 30px;
            textarea{
                width: 100%;
                border: none;
                background: #FFFFFF;
                padding: 15px 24px;
                height: 50px;
                border-radius: 50px;
                &:focus, &:focus-visible{
                    border: none;
                    outline: none;
                }
            }
        }
    }
</style>

