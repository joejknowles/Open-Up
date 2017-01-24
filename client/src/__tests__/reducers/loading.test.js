import isLoading from '../../reducers/isLoading';

it('isLoading defaults to true', () => expect(isLoading(undefined, {})).toBe(true));
