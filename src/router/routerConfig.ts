/**
 *描述：
 *
 *@author sunshixiong
 *@create 2018/7/19-11:14
 */
import Layout from "@/views/Home.vue"

const routerConfig = [
  {path: "/404", component: () => import("@/views/About.vue"), hidden: true},
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    name: "home",
    hidden: true,
    children: [{
      path: "home",
      component: () => import("@/views/About.vue")
    }]
  },
  {
    path: "/userinfo",
    component: Layout,
    children: [
      {
        path: "personal",
        name: "Form",
        component: () => import("@/views/About.vue"),
        meta: {title: "个人中心", icon: "address-card"}
      }
    ]
  },
  {path: "*", redirect: "/404", hidden: true}
]