    <template>
        <div class="container">
            <div class="login">
                <form @submit.prevent="Login">
                    <div class="username">
                        <title>Username:</title>
                        <input type="text" v-model="input.username">
                    </div>
                    <div class="password">
                        <title>Password:</title>
                        <input type="password" v-model="input.password">
                    </div>
                    <input type="submit"  value="Submit">
                </form>
            </div>
            {{ input.username }}
            {{ input.password }}
            
        </div>
    </template>

    <script setup>
    let input = ref({
        username:"mayur",
        password:"somePassword"
    })
    function Login(){
        if((input.value.username == 'saloni' || input.value.username == 'mayur') && input.value.password == 'somePassword' ){
            localStorage.setItem('valid',true);
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