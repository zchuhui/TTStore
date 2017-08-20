<template>
    <div>
        <nav-header></nav-header>
        <nav-break>
            <span slot="goods">Goods</span>
            <span slot="cart">Carts</span>
        </nav-break>
        <div class="accessory-result-page accessory-page">
            <div class="container">
                <div class="filter-nav">
                    <span class="sortby">Sort by:</span>
                    <a href="javascript:void(0)" class="default cur">Default</a>
                    <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
                    <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
                </div>
                <div class="accessory-result">
                <!-- filter -->
                <div class="filter stopPop" id="filter">
                    <dl class="filter-price">
                    <dt>Price:</dt>
                    <dd><a href="javascript:void(0)">All</a></dd>
                    <dd>
                        <a href="javascript:void(0)">0 - 100</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">100 - 500</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">500 - 1000</a>
                    </dd>
                    <dd>
                        <a href="javascript:void(0)">1000 - 2000</a>
                    </dd>
                    </dl>
                </div>

                <!-- search result accessories list -->
                <div class="accessory-list-wrap">
                    <div class="accessory-list col-4">
                    <ul>
                        <li>
                        <div class="pic">
                            <a href="#"><img src="static/img/6.jpg" alt=""></a>
                        </div>
                        <div class="main">
                            <div class="name">XX</div>
                            <div class="price">999</div>
                            <div class="btn-area">
                            <a href="javascript:;" class="btn btn--m">加入购物车</a>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div class="pic">
                            <a href="#"><img src="static/img/6.jpg" alt=""></a>
                        </div>
                        <div class="main">
                            <div class="name">XX</div>
                            <div class="price">1000</div>
                            <div class="btn-area">
                            <a href="javascript:;" class="btn btn--m">加入购物车</a>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div class="pic">
                            <a href="#"><img src="static/img/6.jpg" alt=""></a>
                        </div>
                        <div class="main">
                            <div class="name">XX</div>
                            <div class="price">500</div>
                            <div class="btn-area">
                            <a href="javascript:;" class="btn btn--m">加入购物车</a>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div class="pic">
                            <a href="#"><img src="static/img/6.jpg" alt=""></a>
                        </div>
                        <div class="main">
                            <div class="name">XX</div>
                            <div class="price">2499</div>
                            <div class="btn-area">
                            <a href="javascript:;" class="btn btn--m">加入购物车</a>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>

import './../assets/base.css';
import './../assets/product.css';
import './../assets/login.css';

import NavHeader from '@/components/Header';
import NavFooter from '@/components/Footer';
import NavBreak from '@/components/NavBreak';


export default {
    name:'goodsList',
    data() {
        return {
            msg: '商品列表页面'
        }
    },
    methods: {
        jumpCart() {
            this.$router.push({path:'/cart?goodsId=1212'});    // 带入 Object 
        }
    },
    components:{
        NavHeader,
        NavFooter,
        NavBreak,
    }

}
</script>
