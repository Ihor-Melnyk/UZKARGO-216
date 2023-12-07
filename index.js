function setPropertyRequired(attributeName, boolValue = true) {
  //обов"язкове
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.required = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

function setPropertyHidden(attributeName, boolValue = true) {
  //приховане
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.hidden = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

function setPropertyDisabled(attributeName, boolValue = true) {
  //недоступне
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.disabled = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

function setAttrValue(attributeCode, attributeValue) {
  var attribute = EdocsApi.getAttributeValue(attributeCode);
  attribute.value = attributeValue;
  EdocsApi.setAttributeValue(attribute);
}

function setAttrText(attributeCode, attributeText) {
  var attribute = EdocsApi.getAttributeValue(attributeCode);
  attribute.text = attributeText;
  EdocsApi.setAttributeValue(attribute);
}

function clearAttribute(attributeCode, doNotClearOnInit, isDictionary) {
  //очищення
  if (doNotClearOnInit) {
    return;
  }
  var attribute = EdocsApi.getAttributeValue(attributeCode);
  attribute.value = null;
  attribute.text = null;
  if (isDictionary) {
    attribute.itemCode = null;
    attribute.itemDictionary = null;
  }
  EdocsApi.setAttributeValue(attribute);
}

//Скрипт 1. Зміна властивостей атрибутів при створені документа

function onCardInitialize() {
  AgreeLetterTask();
}

function AgreeLetterTask() {
  debugger;
  var stateTask = EdocsApi.getCaseTaskDataByCode("AgreeLetter")?.state;

  if (stateTask == "assigned" || stateTask == "inProgress" || stateTask == "delegated") {
    setPropertyRequired("NumberContract");
    setPropertyRequired("DateContract");
    setPropertyRequired("NumberInvoice");
    setPropertyRequired("DateInvoice");
    setPropertyRequired("Subject");
    setPropertyRequired("Contractor");
    setPropertyRequired("ContractorFullName");
    setPropertyRequired("ContractorShortName");
    setPropertyRequired("EDRPOUContractor");
    setPropertyRequired("ContractorIPN");
    setPropertyRequired("LegaladdressContractor");
    setPropertyRequired("Organization");
    setPropertyRequired("HomeName");
    setPropertyRequired("OrgShortName");
    setPropertyRequired("OrgCode");
    setPropertyRequired("HomeOrgIPN");
    setPropertyRequired("LegaladdressOrg");
    setPropertyRequired("RegNumber");
    setPropertyRequired("RegDate");

    setPropertyHidden("NumberContract", false);
    setPropertyHidden("DateContract", false);
    setPropertyHidden("NumberInvoice", false);
    setPropertyHidden("DateInvoice", false);
    setPropertyHidden("Subject", false);
    setPropertyHidden("Contractor", false);
    setPropertyHidden("ContractorFullName", false);
    setPropertyHidden("ContractorShortName", false);
    setPropertyHidden("EDRPOUContractor", false);
    setPropertyHidden("ContractorIPN", false);
    setPropertyHidden("LegaladdressContractor", false);
    setPropertyHidden("Organization", false);
    setPropertyHidden("HomeName", false);
    setPropertyHidden("OrgShortName", false);
    setPropertyHidden("OrgCode", false);
    setPropertyHidden("HomeOrgIPN", false);
    setPropertyHidden("LegaladdressOrg", false);
    setPropertyHidden("RegNumber", false);
    setPropertyHidden("RegDate", false);

    setPropertyDisabled("NumberContract", false);
    setPropertyDisabled("DateContract", false);
    setPropertyDisabled("NumberInvoice", false);
    setPropertyDisabled("DateInvoice", false);
    setPropertyDisabled("Subject", false);
    setPropertyDisabled("Contractor", false);
    setPropertyDisabled("ContractorFullName", false);
    setPropertyDisabled("ContractorShortName", false);
    setPropertyDisabled("EDRPOUContractor", false);
    setPropertyDisabled("ContractorIPN", false);
    setPropertyDisabled("LegaladdressContractor", false);
    setPropertyDisabled("Organization", false);
    setPropertyDisabled("HomeName", false);
    setPropertyDisabled("OrgShortName", false);
    setPropertyDisabled("OrgCode", false);
    setPropertyDisabled("HomeOrgIPN", false);
    setPropertyDisabled("LegaladdressOrg", false);
    setPropertyDisabled("RegNumber", false);
    setPropertyDisabled("RegDate", false);

    setContractorHome();
    setContractor();
  } else if (stateTask == "completed") {
    setPropertyRequired("NumberContract");
    setPropertyRequired("DateContract");
    setPropertyRequired("NumberInvoice");
    setPropertyRequired("DateInvoice");
    setPropertyRequired("Subject");
    setPropertyRequired("Contractor");
    setPropertyRequired("ContractorFullName");
    setPropertyRequired("ContractorShortName");
    setPropertyRequired("EDRPOUContractor");
    setPropertyRequired("ContractorIPN");
    setPropertyRequired("LegaladdressContractor");
    setPropertyRequired("Organization");
    setPropertyRequired("HomeName");
    setPropertyRequired("OrgShortName");
    setPropertyRequired("OrgCode");
    setPropertyRequired("HomeOrgIPN");
    setPropertyRequired("LegaladdressOrg");
    setPropertyRequired("RegNumber");
    setPropertyRequired("RegDate");

    setPropertyHidden("NumberContract", false);
    setPropertyHidden("DateContract", false);
    setPropertyHidden("NumberInvoice", false);
    setPropertyHidden("DateInvoice", false);
    setPropertyHidden("Subject", false);
    setPropertyHidden("Contractor", false);
    setPropertyHidden("ContractorFullName", false);
    setPropertyHidden("ContractorShortName", false);
    setPropertyHidden("EDRPOUContractor", false);
    setPropertyHidden("ContractorIPN", false);
    setPropertyHidden("LegaladdressContractor", false);
    setPropertyHidden("Organization", false);
    setPropertyHidden("HomeName", false);
    setPropertyHidden("OrgShortName", false);
    setPropertyHidden("OrgCode", false);
    setPropertyHidden("HomeOrgIPN", false);
    setPropertyHidden("LegaladdressOrg", false);
    setPropertyHidden("RegNumber", false);
    setPropertyHidden("RegDate", false);

    setPropertyDisabled("NumberContract");
    setPropertyDisabled("DateContract");
    setPropertyDisabled("NumberInvoice");
    setPropertyDisabled("DateInvoice");
    setPropertyDisabled("Subject");
    setPropertyDisabled("Contractor");
    setPropertyDisabled("ContractorFullName");
    setPropertyDisabled("ContractorShortName");
    setPropertyDisabled("EDRPOUContractor");
    setPropertyDisabled("ContractorIPN");
    setPropertyDisabled("LegaladdressContractor");
    setPropertyDisabled("Organization");
    setPropertyDisabled("HomeName");
    setPropertyDisabled("OrgShortName");
    setPropertyDisabled("OrgCode");
    setPropertyDisabled("HomeOrgIPN");
    setPropertyDisabled("LegaladdressOrg");
    setPropertyDisabled("RegNumber");
    setPropertyDisabled("RegDate");
  } else {
    setPropertyRequired("NumberContract", false);
    setPropertyRequired("DateContract", false);
    setPropertyRequired("NumberInvoice", false);
    setPropertyRequired("DateInvoice", false);
    setPropertyRequired("Subject", false);
    setPropertyRequired("Contractor", false);
    setPropertyRequired("ContractorFullName", false);
    setPropertyRequired("ContractorShortName", false);
    setPropertyRequired("EDRPOUContractor", false);
    setPropertyRequired("ContractorIPN", false);
    setPropertyRequired("LegaladdressContractor", false);
    setPropertyRequired("Organization", false);
    setPropertyRequired("HomeName", false);
    setPropertyRequired("OrgShortName", false);
    setPropertyRequired("OrgCode", false);
    setPropertyRequired("HomeOrgIPN", false);
    setPropertyRequired("LegaladdressOrg", false);
    setPropertyRequired("RegNumber", false);
    setPropertyRequired("RegDate", false);

    setPropertyHidden("NumberContract");
    setPropertyHidden("DateContract");
    setPropertyHidden("NumberInvoice");
    setPropertyHidden("DateInvoice");
    setPropertyHidden("Subject");
    setPropertyHidden("Contractor");
    setPropertyHidden("ContractorFullName");
    setPropertyHidden("ContractorShortName");
    setPropertyHidden("EDRPOUContractor");
    setPropertyHidden("ContractorIPN");
    setPropertyHidden("LegaladdressContractor");
    setPropertyHidden("Organization");
    setPropertyHidden("HomeName");
    setPropertyHidden("OrgShortName");
    setPropertyHidden("OrgCode");
    setPropertyHidden("HomeOrgIPN");
    setPropertyHidden("LegaladdressOrg");
    setPropertyHidden("RegNumber");
    setPropertyHidden("RegDate");

    setPropertyDisabled("NumberContract", false);
    setPropertyDisabled("DateContract", false);
    setPropertyDisabled("NumberInvoice", false);
    setPropertyDisabled("DateInvoice", false);
    setPropertyDisabled("Subject", false);
    setPropertyDisabled("Contractor", false);
    setPropertyDisabled("ContractorFullName", false);
    setPropertyDisabled("ContractorShortName", false);
    setPropertyDisabled("EDRPOUContractor", false);
    setPropertyDisabled("ContractorIPN", false);
    setPropertyDisabled("LegaladdressContractor", false);
    setPropertyDisabled("Organization", false);
    setPropertyDisabled("HomeName", false);
    setPropertyDisabled("OrgShortName", false);
    setPropertyDisabled("OrgCode", false);
    setPropertyDisabled("HomeOrgIPN", false);
    setPropertyDisabled("LegaladdressOrg", false);
    setPropertyDisabled("RegNumber", false);
    setPropertyDisabled("RegDate", false);
  }
}

function onTaskExecuteAgreeLetter(routeStage) {
  debugger;
  if (routeStage.executionResult == "executed") {
    validationIsValue("NumberContract", "Номер договору");
    validationIsValue("DateContract", "Дата договору");
    validationIsValue("NumberInvoice", "Номер рахунку");
    validationIsValue("DateInvoice", "Дата рахунку");
    validationIsValue("Subject", "Предмет листування");
    validationIsValue("Contractor", "Замовник");
    validationIsValue("ContractorFullName", "Повне найменування");
    validationIsValue("ContractorShortName", "Скорочене найменування");
    validationIsValue("EDRPOUContractor", "Код ЄДРПОУ");
    validationIsValue("ContractorIPN", "ІПН");
    validationIsValue("LegaladdressContractor", "Юридична адреса");
    validationIsValue("Organization", "Домашня організація");
    validationIsValue("HomeName", "Повне найменування");
    validationIsValue("OrgShortName", "Скорочене найменування");
    validationIsValue("OrgCode", "Код ЄДРПОУ");
    validationIsValue("HomeOrgIPN", "ІПН");
    validationIsValue("Юридична адреса", "LegaladdressOrg");
    validationIsValue("RegNumber", "Реєстраційний номер");
    validationIsValue("RegDate", "Реєстраційна дата");

    sendComment(`Ваше звернення прийнято та зареєстровано за № ${EdocsApi.getAttributeValue("RegNumber").value} від ${moment(new Date(EdocsApi.getAttributeValue("RegDate").value)).format("DD.MM.YYYY")}`);
    sendCommand(routeStage);
  }
}

function validationIsValue(attributeName, nameForThrow) {
  debugger;
  if (!EdocsApi.getAttributeValue(attributeName).value) {
    throw `Не заповнено значення поля "${nameForThrow}"`;
  }
}

//Скрипт 2. Передача коментарів в Єсайн
function onTaskCommentedSendOutDoc(caseTaskComment) {
  debugger;
  var orgCode = EdocsApi.getAttributeValue("OrgCode").value;
  var orgShortName = EdocsApi.getAttributeValue("OrgShortName").value;
  if (!orgCode || !orgShortName) {
    return;
  }
  var methodData = {
    extSysDocId: CurrentDocument.inExtId,
    eventType: "CommentAdded",
    comment: caseTaskComment.comment,
    partyCode: orgCode,
    userTitle: CurrentUser.name,
    partyName: orgShortName,
    occuredAt: new Date(),
  };

  caseTaskComment.externalAPIExecutingParams = {
    externalSystemCode: "ESIGN1", // код зовнішньої системи
    externalSystemMethod: "integration/processEvent", // метод зовнішньої системи
    data: methodData, // дані, що очікує зовнішня система для заданого методу
    executeAsync: true, // виконувати завдання асинхронно
  };
}

//Скрипт 3. Автоматичне визначення email контактної особи Замовника
function onCreate() {
  setContractorRPEmailOnCreate;
}

function setContractorRPEmailOnCreate() {
  debugger;
  try {
    var data = EdocsApi.getInExtAttributes(CurrentDocument.id.toString());
    if (data.tableAttributes) {
      EdocsApi.setAttributeValue({ code: "ContractorRPEmail", value: data.tableAttributes.filter((x) => x.code == "ContactPersonEmail").map((y) => y.value)[0] });
    }
  } catch (e) {
    EdocsApi.setAttributeValue({ code: "ContractorRPEmail", value: "" });
  }
}

//Скрипт 4. Передача результату опрацювання документа в ESIGN та коментаря про реєстрацію документа
function setDataForESIGN() {
  debugger;
  var registrationDate = EdocsApi.getAttributeValue("RegDate").value;
  var registrationNumber = EdocsApi.getAttributeValue("RegNumber").value;
  var caseType = EdocsApi.getAttributeValue("DocType").value;
  var caseKind = EdocsApi.getAttributeValue("DocKind").text;
  var name = "";
  if (caseKind) {
    name += caseKind;
  } else {
    name += caseType;
  }
  name += " №" + (registrationNumber ? registrationNumber : CurrentDocument.id) + (!registrationDate ? "" : " від " + moment(registrationDate).format("DD.MM.YYYY"));
  doc = {
    DocName: name,
    extSysDocId: CurrentDocument.id,
    ExtSysDocVersion: CurrentDocument.version,
    docType: "ActCommission",
    docDate: registrationDate,
    docNum: registrationNumber,
    File: "",
    parties: [
      {
        taskType: "ToSign",
        taskState: "Done",
        legalEntityCode: EdocsApi.getAttributeValue("OrgCode").value,
        contactPersonEmail: EdocsApi.getAttributeValue("OrgRPEmail").value,
        signatures: [],
      },
      {
        taskType: "ToSign",
        taskState: "NotAssigned",
        legalEntityCode: EdocsApi.getAttributeValue("ContractorCode").value,
        contactPersonEmail: EdocsApi.getAttributeValue("ContractorRPEmail").value,
        expectedSignatures: [],
      },
    ],
    additionalAttributes: [
      {
        code: "docDate",
        type: "dateTime",
        value: registrationDate,
      },
      {
        code: "docNum",
        type: "string",
        value: registrationNumber,
      },
    ],
    sendingSettings: {
      attachFiles: "fixed", //, можна також встановлювати 'firstOnly' - Лише файл із першої зафіксованої вкладки(Головний файл), або 'all' - всі файли, 'fixed' - усі зафіксовані
      attachSignatures: "signatureAndStamp", // -'signatureAndStamp'Типи “Підпис” або “Печатка”, можна також встановити 'all' - усі типи цифрових підписів
    },
  };
  EdocsApi.setAttributeValue({ code: "JSON", value: JSON.stringify(doc) });
}

function onTaskExecuteSendOutDoc(routeStage) {
  debugger;
  if (routeStage.executionResult == "rejected") {
    sendCommand(routeStage);
  }
}

function sendCommand(routeStage) {
  debugger;
  var command;
  var comment;
  if (routeStage.executionResult == "executed") {
    command = "CompleteTask";
  } else {
    command = "RejectTask";
    comment = routeStage.comment;
  }
  var signatures = EdocsApi.getSignaturesAllFiles();
  var DocCommandData = {
    extSysDocID: CurrentDocument.id,
    extSysDocVersion: CurrentDocument.version,
    command: command,
    legalEntityCode: EdocsApi.getAttributeValue("HomeOrgEDRPOU").value,
    userEmail: EdocsApi.getEmployeeDataByEmployeeID(CurrentUser.employeeId).email,
    userTitle: CurrentUser.fullName,
    comment: comment,
    signatures: signatures,
  };

  routeStage.externalAPIExecutingParams = {
    externalSystemCode: "ESIGN1", // код зовнішньої системи
    externalSystemMethod: "integration/processDocCommand", // метод зовнішньої системи
    data: DocCommandData, // дані, що очікує зовнішня система для заданого методу
    executeAsync: false, // виконувати завдання асинхронно
  };
}

function sendComment(comment) {
  debugger;
  var orgCode = EdocsApi.getAttributeValue("OrgCode").value;
  var orgShortName = EdocsApi.getAttributeValue("OrgShortName").value;
  if (!orgCode || !orgShortName) {
    return;
  }
  var comment = comment;
  var methodData = {
    extSysDocId: CurrentDocument.id,
    eventType: "CommentAdded",
    comment: comment,
    partyCode: orgCode,
    userTitle: CurrentUser.name,
    partyName: orgShortName,
    occuredAt: new Date(),
  };
  EdocsApi.runExternalFunction("ESIGN1", "integration/processEvent", methodData);
}

//Скрипт 5. Автоматичне заповнення атрибутів по контрагенту  та домашній організації із довідника при отриманні документу із зовнішньої системи
function setContractorHome() {
  try {
    var attr = EdocsApi.getInExtAttributes(CurrentDocument.id.toString())?.tableAttributes;
    var dataContractorHome = EdocsApi.getContractorByCode(attr.find((x) => x.row == 1 && x.code == "LegalEntityCode").value, "homeOrganization");

    if (dataContractorHome) {
      EdocsApi.setAttributeValue({ code: "HomeName", value: dataContractorHome.fullName, text: null });
      EdocsApi.setAttributeValue({ code: "OrgShortName", value: dataContractorHome.shortName, text: null });
      EdocsApi.setAttributeValue({ code: "OrgCode", value: dataContractorHome.code, text: null });
      EdocsApi.setAttributeValue({ code: "HomeOrgIPN", value: dataContractorHome.taxId, text: null });
      EdocsApi.setAttributeValue({ code: "LegaladdressOrg", value: dataContractorHome.legalAddress, text: null });
    } else {
      throw ``;
    }
  } catch (error) {
    EdocsApi.message(`Зверніться до Відповідального від ВДВ для внесення нової домашньої організації в довідник`);
  }
}

function setContractor() {
  try {
    var attr = EdocsApi.getInExtAttributes(CurrentDocument.id.toString())?.tableAttributes;
    var dataContractor = EdocsApi.getContractorByCode(attr.find((x) => x.code == "LegalEntityCode").value, "debtor") || EdocsApi.getContractorByCode(attr.find((x) => x.code == "LegalEntityCode").value, "creditor");

    if (dataContractor) {
      EdocsApi.setAttributeValue({ code: "ContractorFullName", value: dataContractor.fullName, text: null });
      EdocsApi.setAttributeValue({ code: "ContractorShortName", value: dataContractor.shortName, text: null });
      EdocsApi.setAttributeValue({ code: "EDRPOUContractor", value: dataContractor.code, text: null });
      EdocsApi.setAttributeValue({ code: "ContractorIPN", value: dataContractor.taxId, text: null });
      EdocsApi.setAttributeValue({ code: "LegaladdressContractor", value: dataContractor.legalAddress, text: null });
    } else {
      throw ``;
    }
  } catch (error) {
    EdocsApi.message(`Зверніться до Відповідального від ВДВ для внесення нового контрагента в довідник`);
  }
}
