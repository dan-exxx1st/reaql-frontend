import { ShallowWrapper, ReactWrapper } from 'enzyme';

export function useDive(wrapper: ShallowWrapper | ReactWrapper) {
    return wrapper.childAt(0).props().children;
}
