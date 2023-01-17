<template>
    <div class="app">
        <div class="wrapper">
            <div class="wrapper__banner">
                <img src="~/static/images/banner-layout.png" alt="">
            </div>
            <div class="wrapper__right">
            </div>
        </div>
        <div class="cnt">
            <div class="cnt__left">

            </div>
            <div class="cnt__content">
                <nuxt />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    html {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;

    }

    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
    }

    .app{
        position: relative;
    }

    .wrapper{
        display: flex;
        position: absolute;
        inset: 0;
        z-index: -1;
        &__banner{
            flex: 1;
            position: fixed;
            left: 0;
            top: 0;
            width: 50%;
            height: 100vh;
            img{
                width: 100%;
                height: 100%;
                display: block;
                margin: 0;
                object-fit: cover;
                object-position: center;
            }
        }
        &__right{
            flex: 1;
        }
    }

    .cnt{
        max-width: 1440px;
        margin: auto;
        display: flex;
        height: 100vh;
        &__left{
            flex: 1;
        }
        &__content{
            flex: 1;
            padding-top: 104px;
        }
    }
    @media screen and (max-width: 768px){
        .wrapper{
            display: none;
        }
        .cnt{
            &__left{
                display: none;
            }
            &__content{
                width: 100%;
                padding-top: 20px;
            }
        }
    }
</style>
