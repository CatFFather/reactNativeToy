export const withHeaderStyle = {
  cardStyle: {
    backgroundColor: '#FFFFFF',
  },
};

export const withoutHeaderStyle = {
  cardStyle: {
    backgroundColor: '#FFFFFF',
    ...padding(40, 20, 40, 20),
  },
};

export const screenTitle = {
  fontSize: 22,
  fontWeight: 700,
  lineHeight: 33,
};
export const screenSubTitle = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 24,
  color: '#999999',
};

export const rowAlignCenter = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : b ? b : a,
  };
}
export const signatureColor = {
  color: '#DB3E07',
};
