export const formVariants = {
  form: {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: 0,
      transition: { duration: 0.9, type: "spring" },
    },
    exit: {
      x: "-100%",
      transition: { duration: 0.5 },
    },
  },
}
export const invoicesVariants = {
  header: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
    },
  },
  item: {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.07,
      },
    }),
    exit: (i) => ({
      opacity: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  },
}

export const invoiceViewVariants = {
  body: {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    exit: { opacity: 0 },
  },
  header: {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    exit: { opacity: 0 },
  },
}

export const modalOverlayVariants = {
  backdrop: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
}

export const modalVariants = {
  modal: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.35,
      },
    },
    exit: {
      scale: 0
    }
  },
}
