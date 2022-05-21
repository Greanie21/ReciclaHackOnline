import * as React from "react";

import { navigate } from "../navigation/core";
import { jumpTo } from "./core/index";

export const navigationRef = React.createRef();

// function navigate(name) {
//   navigationRef.current && navigationRef.current.dispatch(StackActions.push(name));
//   // navigationRef.current && navigationRef.current.navigate(name);
// }

export function puthTeste() {
  navigate("HomeScreen2");
}
export function pushToHomeScreen() {
  navigate("HomeScreen");
}

export function pushVAlert() {
  navigate("VAlert");
}

export function pushToNotificationsScreen() {
  navigate("NotificationsScreen");
}

export function pushToLeadsScreen() {
  navigate("LeadsScreen");
}

export function pushToLeadDetailScreen() {
  navigate("LeadDetailScreen");
}

export function pushToUserDocumentsScreen() {
  navigate("UserDocumentsScreen");
}
export function pushToUserSelectTypeDocumentScreen() {
  navigate("UserSelectTypeDocumentScreen");
}
export function pushToUserDocumentSentScreen() {
  navigate("UserDocumentSentScreen");
}

export function pushToLeadListScreen({ etapa }) {
  navigate("LeadListScreen", { etapa });
}

export function pushToLeadsHistoryScreen({ lead, etapa }) {
  navigate("LeadsHistoryScreen", { lead, etapa });
}

export function jumpToLeadsScreen() {
  jumpTo("LeadsScreen");
}
export function jumpToHomeScreen() {
  jumpTo("HomeScreen");
}

export function pushToRegisterScreen() {
  navigate("RegisterScreen");
}
export function pushToUserInformationScreen() {
  navigate("UserInformationScreen");
}
export function pushToChangePasswordScreen() {
  navigate("ChangePasswordScreen");
}
export function pushToExtratoScreen() {
  navigate("ExtratoScreen");
}
export function pushToSupportScreen() {
  navigate("SupportScreen");
}
export function pushToMapaScreen() {
  navigate("MapaScreen");
}
export function pushToContractScreen() {
  navigate("ContractScreen");
}
export function pushToContractRegisterScreen() {
  navigate("ContractRegisterScreen");
}
export function pushToContractSentScreen() {
  navigate("ContractSentScreen");
}
export function pushToSimulatorScreen() {
  navigate("SimulatorScreen");
}
export function pushToSelectSimulatorScreen() {
  navigate("SelectSimulatorScreen");
}
export function pushToPacSimulatorScreen() {
  navigate("PacSimulatorScreen");
}

export function pushToAddCnpjScreen() {
  navigate("AddCnpjScreen");
}
export function pushToExpansionScreen() {
  navigate("ExpansionScreen");
}
export function pushToChargeScreen() {
  navigate("ChargeScreen");
}
export function pushToChargeListScreen() {
  navigate("ChargeListScreen");
}
export function pushToRetiraComissaoScreen() {
  navigate("RetiraComissaoScreen");
}
export function pushToUploadScreen(params = {}) {
  navigate("UploadScreen", params);
}
export function pushToPrPortabilitySimulatorScreen() {
  navigate("PrPortabilityScreen");
}
export function pushToConvencionalPrfSimulatorScreen() {
  navigate("ConvencionalPrfScreen");
}
export function pushToMyVisitsScreen() {
  navigate("MyVisitsScreen");
}
export function pushToUnivillela() {
  navigate("UnivillelaFoldersScreen");
}
export function pushToUnivillelaVideo() {
  navigate("UnivillelaVideoScreen");
}
export function pushToIndicationScreen() {
  navigate("IndicationScreen");
}
export function pushToMyNetworkScreen() {
  navigate("MyNetworkScreen");
}
export function pushToPendingScreen() {
  navigate("PendingScreen");
}
export function pushToIndicatedDetailsScreen(indicatedId) {
  navigate("IndicatedDetailsScreen", indicatedId);
}
export function pushToLeadMarketScreen() {
  navigate("LeadMarketScreen");
}
export function pushToMonitoramentoScreen() {
  navigate("MonitoramentoScreen");
}
export function pushToRelateVisitScreen() {
  navigate("RelateVisitScreen");
}
