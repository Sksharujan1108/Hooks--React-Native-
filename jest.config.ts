import { Config } from '@jest/types';
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";
const untranspiledModulePatterns = [
 "(jest-)?@react-native|react-native",
 "@react-native-community",
 "expo(nent)?",
 "@expo(nent)?/.*",
 "react-navigation",
 "@react-navigation/.*",
 "@unimodules/.*",
 "unimodules",
 "sentry-expo",
 "native-base",
 "react-native-svg",
 "@geuntabuwono/react-native-material-textfield",
 "react-native-material-textfield",
 "@softmedialab/react-native-material-textfield",
 'usehooks-ts',
 "react-native-confirmation-code-field",
 "react-native-confirmation-code-input",
 "react-native-flash-message",
 "react-native-progress-steps"
];
const config: Config.InitialOptions = {
 preset: 'jest-expo',
 setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
 transformIgnorePatterns: [
  `node_modules/(?!${untranspiledModulePatterns.join("|")})`,
 ],
 moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
 moduleNameMapper: {
 },
 collectCoverage: true,
};
export default config;