<template>
    <div class="container">
        <p>user:{{ user }}</p>
<button @click.prevent="handleLogOut">Logout</button>
        <div class="messageList">
                <p v-for="(message,index) in allChats" :class="['messages',message.author.includes('mayur')?'list-one':'list-two']" :key="index">{{ message.message }} </p>
        </div>

        <div class="messageForm">
        <form @submit.prevent="handleEnter">
        <input type="text" placeholder="Message" v-model="message">
        <input type="submit" value="Submit">
        </form>
      </div>
    </div>
</template>

<script setup>
let allChats=ref([]),message=ref(""),user=ref('');
const supabase = useSupabaseClient(),refreshMessages=setInterval(getChats,1000);

async function getChats(){
    let {data} = await supabase.from('chats').select('*');
    allChats.value = data
}
onMounted(()=>{
    user.value = localStorage.getItem('user')
    if(localStorage.getItem('valid') == 'true'){
       
    }else{
        navigateTo('/')
    }
})

onUnmounted(()=>{
    clearInterval(refreshMessages);
})


async function handleEnter(){
const { data } = await supabase.from('chats').insert({ message: message.value, author: user.value, }).single();
message.value = '';
   await getChats();
}

function handleLogOut(){
    localStorage.clear();
    navigateTo('/login')
}
</script>

<style lang="scss" scoped>
.messages{
    display: flex;
    width: 100%;
}
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.list-one{
    background-color: rgb(242, 217, 243);
}
.list-two{
    background-color: peachpuff;
    
}

</style>