<template>
    <ul>
        <li>
            <p><span class="iconfont icon-fangdajing"></span></p>
            <p>电影/影院</p>
        </li>
        <li>
            <p><span class="iconfont icon-fangdajing"></span></p>
            <p>视频</p>
        </li>
        <li>
            <p><span class="iconfont icon-fangdajing"></span></p>
            <p>小视频</p>
        </li>
        <li>
            <p><span class="iconfont icon-fangdajing"></span></p>
            <p>演出</p>
        </li>
        <li>
            <p><span class="iconfont icon-fangdajing"></span></p>
            <p>我的</p>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{}
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";

    ul{
        width:100%;
        height: 50px;
        position:fixed;
        bottom:0;
        left:0;
        background:white;
        li{
            float: left;
            width: 20%;
            height: 50px;
            text-align: center;
            p{
                font-size:10px;
            }
            >p:first-child{
                margin-top:5px;
                .iconfont{
                    font-size:22px;
                }
            }
            >p:last-child{
                margin-top:5px;
                font-size:10px;
            }
        }
        li:first-child{
            color:$theme-color;
        }
    }
</style>