import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from 'views/home/Home'
import About from 'views/about/About'
import Resume from 'views/resume/Resume'
import Skill from 'views/skill/Skill'
import Work from 'views/work/Work'
import Show from 'views/show/Show'
import Contact from 'views/contact/Contact'

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: '/home',
    components: {
      a: Home,
    }
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/resume',
    component: Resume
  },
  {
    path: '/skill',
    component: Skill
  },
  {
    path: '/work',
    component: Work
  },
  {
    path: '/show',
    component: Show
  },
  {
    path: '/contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router