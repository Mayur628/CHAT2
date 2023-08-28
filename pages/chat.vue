<template>
    <div class="container">
        <div class="content">
            <div class="header d-flex justify-content-between  align-items-center mb-4">
                <div>user:{{ user }}</div>
                <div :class="[user.toLocaleLowerCase().includes('mayur')?'color-primary':'color-secondary']"></div>
                <button @click.prevent="handleLogOut" class="btn btn-danger">Logout</button>
            </div>
            <div class="messageList">
                    <div v-for="(message,index) in allChats" :class="['messages mb-2 d-flex justify-content-between' ,message.author.includes('mayur')?'list-one':'list-two']" :key="index"><span>{{ message.message }}</span> <span class="font-weight-light font-italic">-{{ message.author }}</span> </div>
            </div>
    
            <div class="messageForm">
            <form @submit.prevent="handleEnter" class="form">
            <input type="text" placeholder="Message" class="form-control" v-model="message">
            <input type="submit" class="btn btn-success" value="Submit">
            </form>
          </div>

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
.color-primary{
    height: 10px;
    width: 10px;
    background-color: rgb(242, 217, 243);
}
.color-secondary{

    background-color: peachpuff;
}
.list-one{
    background-color: rgb(242, 217, 243);
}
.list-two{
    background-color: peachpuff;
    
}

</style>