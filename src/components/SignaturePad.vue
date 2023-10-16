<template>
  <div>
    <vue-signature-pad
      ref="signaturePad"
      :options="options"
      @change="onSignatureChange"
    ></vue-signature-pad>
    <button @click="clearSignature">Borrar Firma</button>
  </div>
</template>

<script>
import VueSignaturePad from 'vue-signature-pad';

export default {
  components: {
    VueSignaturePad,
  },
  data() {
    return {
      options: {
        width: 300,
        height: 150,
        penColor: 'black',
        backgroundColor: 'white',
      },
    };
  },
  methods: {
    onSignatureChange(signatureData) {
      // Aquí puedes manejar la firma digitalizada, por ejemplo, enviarla a un servidor
      console.log('Firma digitalizada:', signatureData);
    },
    clearSignature() {
      // Limpiar la firma
      this.$refs.signaturePad.clear();
    },
  },
};
</script>

<style scoped>
/* Estilos personalizados para el componente si es necesario */
</style>
