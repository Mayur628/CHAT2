<template>
    <div class="container">
        <div class="login ">
            <form @submit.prevent="Login" class="form d-flex flex-column">
                <div class="username mb-3 row">
                    <label class="col-5">Username:</label>
                    <input type="text" class="form-control col-sm" placeholder="" v-model="input.username">
                </div>
                <div class="password row">
                    <label class="col-5">Password:</label>
                    <input type="password" class="form-control col-sm" v-model="input.password">
                </div>
                <input type="submit" class="btn btn-success mt-3" value="Login">
            </form>
        </div>
        
    </div>
</template>

<script setup>
let input = ref({
    username:"",
    password:""
})
function Login(){
    if((input.value.username.toLocaleLowerCase().includes('saloni') || input.value.username.toLocaleLowerCase().includes('mayur')) && input.value.password == 'somePassword' ){
        localStorage.setItem('valid',true);
        localStorage.setItem('user',input.value.username);

        navigateTo('/chat');
    }else{
        
        localStorage.removeItem('valid');
    }
}

</script>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>