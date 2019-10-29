<template>
    <div>
        <button @click="invokeParentMethod">调用父组件的方法</button><br/>
        <button @click="addAge">+1</button>
        {{name}}---{{myAge}}
    </div>
</template>

<script>
export default {
    data(){
        return {
            myAge:0
        }
    },
    created() {
        this.myAge = this.age
    },
    // props:['name','age'],
    props:{
       name:{
           type:String,
           required: true
       },
    //    age:Number 
     age:{
        type:Number,
        // required:true,
        default: 100
     }
    },
    methods:{
        invokeParentMethod(){
            console.log(this.$parent)
            this.$parent.testParent()
        },
        testChildMethod(){
            console.log('---testChildMethod---')
        },
        addAge(){
            this.myAge++
        }
    }
}
</script>
