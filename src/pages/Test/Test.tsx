import React, {useState} from "react";
import s from "./Test.module.css";
import SuperInputText from "../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../common/components/SuperButton/SuperButton";
import SuperCheckbox from "../../common/components/SuperCheckBox/SuperCheckBox";


export const Test: React.FC = () => {

    const [testValue, setTestValue] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);

    const showTestValue = () => {
        alert(testValue);
    }

    return (
        <div className={s.mainBlock}>
            <h1>Test</h1>
            <SuperInputText
                value={testValue}
                onChangeText={setTestValue}
                onEnter={showTestValue}
            />
            <SuperButton onClick={showTestValue}>
                SuperButton
            </SuperButton>
            <SuperCheckbox
                checked={checked}
                onChangeChecked={setChecked}
            >
                Text for Checkbox
            </SuperCheckbox>
        </div>
    );
};