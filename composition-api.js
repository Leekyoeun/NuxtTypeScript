// import Vue from 'vue'
// import VueCompositionApi from '@vue/composition-api'

// Vue.use(vuecompositionApi)

import {defineComponent, computed, ref} from '@vue/composition-api'

interface User{
    firstName:String
    lastname:String
}

export default defineComponent({
    props:{
        user:{
            type: Object as() => User,
            required:true
        }
    },

    setup({user}){
        const fullname=computed(()=>`${user.firstName} ${user.lastname}`)
        const message=ref('This is a message')

        return{
            fullName,
            message
        }
    }
})