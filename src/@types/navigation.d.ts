export interface TabMainRoutes {
    buscar: undefined;
  
}

declare global {
    namespace ReactNavaigation{
        interface RootParamList {
            tabMain: TabMainRoutes,
            suporte:undefined
        }
    }
}