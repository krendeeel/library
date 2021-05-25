
export const validateEmail = value => {
  let errors;

  if (!value) {
    errors = "Поле обязательно!";
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    errors = "Неверный Email!";
  }

  return errors;
};

export const validateInput = value => {
    let errors;
  
    if (!value) {
      errors = "Поле обязательно";
    } 
    return errors;
  };

export const isRequired = value => (!value ? "Поле обязательно!" : "");
