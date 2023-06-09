export const basicHeader = {
  height: 64,
};

export const colors = {
  mainBackgroundColor: '#FFFFFF',
  signatureColor: '#DB3E07',
  blank: '#E5E5E5',
  disabled: {
    trueBackground: '#F5F5F5',
    falseBackground: '#DB3E07',
    trueText: '#BBBBBB',
    falseText: '#FFFFFF',
  },
};

export const withHeaderStyle = {
  ...padding(30, 20, 30, 20),
};

export const withoutHeaderStyle = {
  ...padding(40, 20, 40, 20),
};

export const screenTitle = {
  fontSize: 22,
  fontWeight: 700,
};
export const screenSubTitle = {
  fontSize: 16,
  fontWeight: 400,
  color: '#999999',
};

export const align = {
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  basicRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const commonLabel = {
  color: '#000000',
  fontSize: 12,
};

export function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : b ? b : a,
  };
}
