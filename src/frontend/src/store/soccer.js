import axios from 'axios'
import router from '@/router'

const state ={
    context : 'http://localhost:5000/'
}
const actions ={
    async soccer({commit},x) {
        axios.post(state.context + `soccer` ,x,{
            authorization: 'JWT fefege..',
            Accept : 'application/json',
            'Content-Type': 'application/json'
        })
            .then(({data})=>{
                alert('검색된 결과수')
                commit('SEARCH',data)
                router.push('Home')
            })
            .catch(()=>{
                alert('통신실패!')
            })

    }
}
const mutations ={
    SEARCH(state, data) {
        alert('뮤테이션접속')
    }
}
const getters = {}




export  default {
    name:soccer,
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}