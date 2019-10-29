<template>
    <div>
        我是父组件:
        <button @click="invokeChildMethod">调用子组件的方法</button>
        <hr />
        <Child name="小胖" :age="19" ref="childRef"/>
        <!-- <Child name="小胖" ref="childRef"/> -->
    </div>
</template>

<script>
import Child from './Child'
export default {
    components:{
        Child
    },
    methods:{
        testParent(){
            console.log('----Parent---test---Method')
        },
        invokeChildMethod(){
            this.$refs.childRef.testChildMethod()
        }
    }
}
</script>
