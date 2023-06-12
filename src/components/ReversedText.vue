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
    <div class="flex-1 mx-auto content-center">   
        <textarea class="" v-model="inputText"  placeholder="Digite o texto aqui"> </textarea>
        <button @click="reverseText">Inverter</button>
        <div class="reversed-text">{{ reversedText }} </div>
    </div>
</div>

</template>