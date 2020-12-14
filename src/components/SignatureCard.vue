<template>
  <div
    class="preview"
    :class="`theme-${signatureData.signatureFields.signatureCompanyNameSimple}`"
  >
    <div class="preview-top">
      <div class="preview-header">
        <div class="preview-header-top">
          <div class="preview-header-title">
            New message
          </div>
          <div class="preview-header-to">
            <span>To</span>
            <p class="recipient">John Doe</p>
          </div>
          <div class="preview-header-subject">
            <span>Subject</span>
            <p class="subject">Check out my new email signature</p>
          </div>
        </div>
      </div>
    </div>
    <div class="preview-middle signature-content">
      <p class="sig-name">
        <strong>{{ signatureData.signatureFields.signatureName }}</strong>
      </p>
      <p class="sig-title">
        <em>{{ signatureData.signatureFields.signatureTitle }}</em>
      </p>
      <p class="sig-mail">
        <a
          :href="`mailto:${signatureData.signatureFields.signatureMail}`"
          :style="
            `color:${signatureData.signatureFields.signatureCompanyColorCode}`
          "
          >{{ signatureData.signatureFields.signatureMail }}</a
        >
      </p>
      <p class="sig-tel-mob">
        <span
          v-if="
            signatureData.signatureFields.signatureTelMobilePrefix ||
              signatureData.signatureFields.signatureTelMobile
          "
          class="prefix"
        >
          <strong>M:</strong>
        </span>
        <span v-if="signatureData.signatureFields.signatureTelMobilePrefix"
          >+{{ signatureData.signatureFields.signatureTelMobilePrefix }}
        </span>
        {{ signatureData.signatureFields.signatureTelMobile }}
      </p>
      <p class="sig-tel-work">
        <span
          v-if="
            signatureData.signatureFields.signatureTelWorkPrefix ||
              signatureData.signatureFields.signatureTelWork
          "
          class="prefix"
        >
          <strong>W:</strong>
        </span>
        <span v-if="signatureData.signatureFields.signatureTelWorkPrefix"
          >+{{ signatureData.signatureFields.signatureTelWorkPrefix }}</span
        >
        {{ signatureData.signatureFields.signatureTelWork }}
      </p>
      <img
        class="sig-logo"
        :src="
          `/img/logo-${signatureData.signatureFields.signatureCompanyNameSimple}.png`
        "
        alt=""
      />
      <div class="sig-address">
        <p>{{ signatureData.signatureFields.signatureCompanyAddress }}</p>
        <p>
          {{ signatureData.signatureFields.signatureCompanyZip }}
          {{ signatureData.signatureFields.signatureCompanyCity }}
        </p>
        <p></p>
        <p>
          <a :href="signatureData.signatureFields.signatureCompanyWebAddress">{{
            signatureData.signatureFields.signatureCompanyWebAddressLabel
          }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignatureCard',
  props: {
    signatureData: {
      type: Object,
      default: null
    }
  }
};
</script>

<style scoped lang="postcss">
.preview {
  background-color: var(--color-white);
  border: solid 1px var(--color-primary);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  &.theme {
    &-bluebirdday {
      --color-primary: var(--color-bluebirdday);
    }

    &-boldlyxr {
      --color-primary: var(--color-boldlyxr);
    }

    &-esites {
      --color-primary: var(--color-esites);
    }

    &-fingerspitz {
      --color-primary: var(--color-fingerspitz);
    }

    &-tde {
      --color-primary: var(--color-tde);
    }

    &-twentyseven {
      --color-primary: var(--color-twentyseven);
    }

    &-weekend {
      --color-primary: var(--color-weekend);
    }
  }

  &-header-top {
    border-radius: 10px 10px 0 0;
    overflow: hidden;
  }

  &-header-title,
  &-header-to,
  &-header-subject {
    color: var(--color-gray-700);
    padding: var(--space-12) 0;

    > span {
      width: 65px;
      display: inline-block;
      border: solid 1px var(--color-gray);
      padding: var(--space-2) var(--space-8);
      color: var(--color-gray-700);
      border-radius: 4px;
      font-size: var(--font-size-sm);
      margin-right: var(--space-8);
    }
  }

  &-header-to,
  &-header-subject {
    margin-left: var(--space-20);
    margin-right: var(--space-20);
    border-bottom: solid 1px var(--color-gray);
  }

  &-header-title {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding-left: var(--space-12);
    padding-right: var(--space-12);
  }

  &-header-to {
    font-size: var(--font-size-sm);

    .recipient {
      display: inline-block;
      color: var(--color-gray-700);
      margin-bottom: 0;
    }
  }

  &-header-subject {
    font-size: var(--font-size-sm);

    .subject {
      display: inline-block;
      font-weight: var(--font-weight-bold);
      color: var(--color-gray-700);
      margin-bottom: 0;
    }
  }

  &-middle {
    padding: var(--space-20);
  }

  // signature content
  .signature-content {
    p {
      margin-bottom: var(--space-4);
      font-size: var(--font-size-sm);
      line-height: 1rem;
    }

    .prefix {
      width: 25px;
      display: inline-block;
    }

    .sig {
      &-name {
        // font-size: var(--font-size-base);
      }

      &-title {
        margin-bottom: var(--space-8);
      }

      &-mail {
        margin-bottom: var(--space-8);

        > a {
          color: var(--color-green);
        }
      }

      &-logo {
        margin-top: var(--space-24);
        margin-bottom: var(--space-24);
        max-width: 200px;
      }

      &-address {
        p {
          font-size: var(--font-size-xs);
          color: var(--color-gray-700);
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
