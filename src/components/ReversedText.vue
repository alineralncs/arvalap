<script>
export default {
    data() {
        return {
            inputText: '',
            reversedText: '',
        };
    },
    methods: {
        reverseText() {
            const reversed = this.inputText.split('').reverse().join('');
            this.reversedText = reversed;
        },
    },
};
</script>

<template>
    <div class="container mx-auto justify-items-center">
    <div class="flex mx-auto content-center">   
        
        <textarea class="rounded-md border border-green-300 bg-gray-100 p-2 resize-none" v-model="inputText"  placeholder="Digite o texto aqui"> </textarea>
        <button class="bg-green-400 rounded-sm p-2 m-2" @click="reverseText">Inverter</button>
      
    </div>
    <div class="reversed-text">{{ reversedText }} </div>
</div>

</template>