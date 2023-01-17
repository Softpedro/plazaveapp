
<template>
  <div class="form">
    <div class="form__bg"></div>
    <form class="form__wrapper" @submit.prevent="submit">
        <h5 class="form__title">Foto de perfil</h5>
        <div class="form__photo">
            <input type="file">
        </div>
        <div class="form__input">
            <label for="">Nombres</label>
            <input type="text">
        </div>
        <div class="form__input">
            <label for="">Apellidos</label>
            <input type="text">
        </div>
        <div class="form__btn">
            <button type="submit">Ingresar</button>
        </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Form',
  methods: {
    submit(){
        window.location = '/promociones'
    }
  }
}
</script>

<style scoped lang="scss">
    .form{
        height: inherit;
        margin-top: 48px;
        &__bg{
            background-image: url('~/static/images/bg_login.png');
            position: absolute;
            right: 0;
            bottom: 0;
            inset: 0;
            background-repeat: no-repeat;
            background-position: bottom right;
            pointer-events: none;
        }
        &__wrapper{
            max-width: 294px;
            margin: auto;
        }
        &__title,
        &__photo{
            max-width: 160px;
            margin: auto;
        }
        &__title{
            font-size: 18px;
            color: #383838;
            margin-bottom: 40px;
            text-align: center;
        }
        &__photo{
            width: 160px;
            height: 160px;
            border-radius: 50%;
            background-color: #D9D9D9;
            margin-bottom: 45px;
            position: relative;
            input{
                cursor: pointer;
                position: absolute;
                inset: 0;
                opacity: 0;
            }
        }
        &__input{
            margin-top: 13px;
            &:first-child{
                margin-top: 0;
            }
            label{
                display: block;
                font-size: 16px;
                line-height: 24px;
                margin-bottom: 5px;
            }
            input{
                border: none;
                background: none;
                background-color: #EAEAEA;
                height: 40px;
                width: 100%;
                border-radius: 5px;
            }
        }
        &__btn{
            margin-top: 42px;
            a, button{
                width: 100%;
                height: 40px;
                border: none;
                border-radius: 40px;
                background-color: #FFE81E;
                color: #FC2016;
                cursor: pointer;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                display: flex;
            }
        }
    }
    @media screen and (max-width: 768px){
        .form{
            &__bg{
                background-size: 50%;
            }
            &__title{
                font-size: 14px;
            }
            &__input{
                label{
                    font-size: 12px;
                }
            }
        }
    }
</style>