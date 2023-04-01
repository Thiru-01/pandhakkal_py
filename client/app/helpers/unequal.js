import { helper } from '@ember/component/helper';

export default helper(function unequal([param1, param2]/*, hash*/) {
  return param1 !== param2;

});
