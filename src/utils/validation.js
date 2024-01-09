import strings from '../localization';

export const vehicleFormRules = {
  typeVehicle: {
    required: {
      value: true,
      message: strings.validationForm.fieldRequired,
    },
  },
  city: {
    required: {
      value: true,
      message: strings.validationForm.fieldRequired,
    },
  },
  plate: {
    required: {
      value: true,
      message: strings.validationForm.fieldRequired,
    },
  },
};

export const driverFormRules = {
  docType: {
    required: {
      value: true,
      message: strings.validationForm.fieldRequired,
    },
  },
  docNumber: {
    required: {
      value: true,
      message: strings.validationForm.fieldRequired,
    },
  },
  name: {
    required: {
      value: true,
      message: strings.validationForm.fieldRequired,
    },
  },
  last_name: {
    required: {
      value: true,
      message: strings.validationForm.fieldRequired,
    },
  },
  phone: {
    required: {
      value: true,
      message: `${strings.validationForm.fieldRequired}`,
    },
  },
};

export const driverFilesRules = {
  fileNumber: {
    required: {
      value: true,
      message: strings.validationForm.fieldRequired,
    },
  },
  fileDueDate: {
    required: {
      value: true,
      message: strings.validationForm.fieldRequired,
    },
  },
};

export const vehicleFilesRules = {
  fileNumber: {
    required: {
      value: true,
      message: strings.validationForm.fieldRequired,
    },
  },
  fileDueDate: {
    required: {
      value: true,
      message: strings.validationForm.fieldRequired,
    },
  },
};
