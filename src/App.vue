<template>
  <div id="app">
    <el-container>
        <el-header><layout-header></layout-header></el-header>
        <el-container>
            <el-aside><layout-aside></layout-aside></el-aside>
            <el-container>
                <el-main>
                  <router-view></router-view>
                </el-main>
                <el-footer><layout-footer></layout-footer></el-footer>
            </el-container>
        </el-container>
    </el-container>
  </div>
</template>


<script>


import LayoutHeader from "@/components/Header";
import LayoutFooter from "@/components/Footer";
import LayoutAside from "@/components/Aside";

export default {
  name: "app",
  components: {
    LayoutHeader,
    LayoutFooter,
    LayoutAside
  },
  data() {
    return {};
  }
};
</script>


<style>

.el-aside{
  background-color:#fff;
}
.el-main {
  min-height: 800px;
}
  

</style>

