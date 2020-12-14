<template>
  <form class="form">
    <div class="form-group row">
      <label class="form-label" for="inputName">Name</label>
      <input
        type="text"
        class="form-control"
        id="inputName"
        placeholder="Enter name"
        :value="signatureData.signatureFields.signatureName"
        @input="changeSignatureName"
      />
    </div>
    <div class="form-group row">
      <label class="form-label" for="inputTitle">Title</label>
      <input
        type="text"
        class="form-control"
        id="inputTitle"
        placeholder="Enter title"
        :value="signatureData.signatureFields.signatureTitle"
        @input="changeSignatureTitle"
      />
    </div>
    <div class="form-group row">
      <label class="form-label" for="inputEmail">Email</label>
      <input
        type="text"
        class="form-control"
        id="inputEmail"
        placeholder="Enter email address"
        :value="signatureData.signatureFields.signatureMail"
        @input="changeSignatureMail"
      />
    </div>
    <div class="form-group row">
      <label class="form-label" for="selectCompany">Company</label>
      <select
        :class="brandSelected"
        class="form-control"
        id="selectCompany"
        @input="changeSignatureCompanyLogo"
      >
        <option value="5" selected>Twentyseven Agency</option>
        <option value="0">Bluebird Day</option>
        <option value="1">Boldly XR</option>
        <option value="2">e-sites</option>
        <option value="3">Fingerspitz</option>
        <option value="4">TDE</option>
        <option value="6">Weekend</option>
      </select>
    </div>
    <div class="form-group row">
      <label class="form-label" for="inputPhoneMobile">Mobile</label>
      <div class="col">
        <input
          type="text"
          class="form-control form-prefix"
          placeholder="+"
          :value="signatureData.signatureTelMobilePrefix"
          @input="changeSignatureTelMobilePrefix"
        />
      </div>
      <input
        type="text"
        class="form-control"
        id="inputPhoneMobile"
        placeholder="Enter mobile number"
        :value="signatureData.signatureTelMobile"
        @input="changeSignatureTelMobile"
      />
    </div>
    <div class="form-group row">
      <label class="form-label" for="inputPhoneWork">Work</label>
      <div class="col">
        <input
          type="text"
          class="form-control form-prefix"
          placeholder="+"
          :value="signatureData.signatureTelWorkPrefix"
          @input="changeSignatureTelWorkPrefix"
        />
      </div>
      <input
        type="text"
        class="form-control"
        id="inputPhoneWork"
        placeholder="Enter mobile number"
        :value="signatureData.signatureTelWork"
        @input="changeSignatureTelWork"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: 'SignatureFields',
  props: {
    signatureData: {
      type: Object,
      default: null
    }
  },
  methods: {
    changeSignatureName(e) {
      /* eslint-disable */
      this.signatureData.signatureFields.signatureName = e.target.value;
    },
    changeSignatureTitle(e) {
      this.signatureData.signatureFields.signatureTitle = e.target.value;
    },
    changeSignatureMail(e) {
      this.signatureData.signatureFields.signatureMail = e.target.value;
    },
    changeSignatureTelMobilePrefix(e) {
      this.signatureData.signatureFields.signatureTelMobilePrefix =
        e.target.value;
    },
    changeSignatureTelMobile(e) {
      this.signatureData.signatureFields.signatureTelMobile = e.target.value;
    },
    changeSignatureTelWorkPrefix(e) {
      this.signatureData.signatureFields.signatureTelWorkPrefix =
        e.target.value;
    },
    changeSignatureTelWork(e) {
      this.signatureData.signatureFields.signatureTelWork = e.target.value;
    },
    changeSignatureCompanyLogo(e) {
      this.brandSelected = this.signatureData.handPickedCompany[
        e.target.value
      ].companyNameSimple;
      this.signatureData.signatureFields.signatureCompanyColorCode = this.signatureData.handPickedCompany[
        e.target.value
      ].companyColorCode;
      this.signatureData.signatureFields.signatureCompanyLogo = this.signatureData.handPickedCompany[
        e.target.value
      ].companyName;
      this.signatureData.signatureFields.signatureCompanyNameSimple = this.signatureData.handPickedCompany[
        e.target.value
      ].companyNameSimple;
      this.signatureData.signatureFields.signatureCompanyAddress = this.signatureData.handPickedCompany[
        e.target.value
      ].companyAddress;
      this.signatureData.signatureFields.signatureCompanyZip = this.signatureData.handPickedCompany[
        e.target.value
      ].companyZip;
      this.signatureData.signatureFields.signatureCompanyCity = this.signatureData.handPickedCompany[
        e.target.value
      ].companyCity;
      this.signatureData.signatureFields.signatureCompanyWebAddressLabel = this.signatureData.handPickedCompany[
        e.target.value
      ].companyWebAddressLabel;
      /* eslint-enable */
    }
  }
};
</script>

<style scoped lang="postcss">
.form {
  &-label {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    margin-bottom: 0;
    padding: 0 12px;
    flex-basis: 25%;
  }

  &-control {
    display: inline-flex;
  }

  &-prefix {
    width: 50px;
    margin-right: var(--space-12);
  }
}
</style>
