<template>
    <div>
        我是Watch<br/>
        {{person.name}}<br/>
        <!-- <button @click="name='小匡'">更改name</button> -->
        <!-- <button @click="name=111">更改name</button> -->

        <button @click="person.name='小勇'">更改name</button>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            // name:'小胖',
            person:{
                // name:'小胖'
            }
        }
    },
    created() {
        this.$set(this.person,'name','小红')
    },
    watch:{
        // name(newValue,oldValue){
        //     // console.log(newValue)
        //     if (typeof newValue !== 'string'){
        //         alert('用户名必须是字符串')
        //     }
        // }
        'person.name':{
            handler: function (val, oldVal) { console.log(val) },
            // deep: true
            immediate: true
        }
    }
}
</script>