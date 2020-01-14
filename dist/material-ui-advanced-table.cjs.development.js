'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var core = require('@material-ui/core');
var PropTypes = _interopDefault(require('prop-types'));
var reactBeautifulDnd = require('react-beautiful-dnd');
var DateFnsUtils = _interopDefault(require('@date-io/date-fns'));
var pickers = require('@material-ui/pickers');
var colorManipulator = require('@material-ui/core/styles/colorManipulator');
var classNames = _interopDefault(require('classnames'));
var filefy = require('filefy');
var DoubleScrollbar = _interopDefault(require('react-double-scrollbar'));
var formatDate = _interopDefault(require('date-fns/format'));
var debounce = require('debounce');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var MTableAction =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MTableAction, _React$Component);

  function MTableAction() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MTableAction.prototype;

  _proto.render = function render() {
    var _this = this;

    var action = this.props.action;

    if (typeof action === 'function') {
      action = action(this.props.data);

      if (!action) {
        return null;
      }
    }

    if (action.hidden) {
      return null;
    }

    var handleOnClick = function handleOnClick(event) {
      if (action.onClick) {
        action.onClick(event, _this.props.data);
        event.stopPropagation();
      }
    };

    var button = React.createElement(core.IconButton, {
      size: this.props.size,
      color: "inherit",
      disabled: action.disabled,
      onClick: function onClick(event) {
        return handleOnClick(event);
      }
    }, typeof action.icon === 'string' ? React.createElement(core.Icon, Object.assign({}, action.iconProps), action.icon) : React.createElement(action.icon, Object.assign({}, action.iconProps, {
      disabled: action.disabled
    })));

    if (action.tooltip) {
      return React.createElement(core.Tooltip, {
        title: action.tooltip
      }, button);
    } else {
      return button;
    }
  };

  return MTableAction;
}(React.Component);
MTableAction.defaultProps = {
  action: {},
  data: {}
};
MTableAction.propTypes = {
  action:
  /*#__PURE__*/
  PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  data:
  /*#__PURE__*/
  PropTypes.oneOfType([PropTypes.object,
  /*#__PURE__*/
  PropTypes.arrayOf(PropTypes.object)]),
  size: PropTypes.string
};

var MTableActions =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MTableActions, _React$Component);

  function MTableActions() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MTableActions.prototype;

  _proto.render = function render() {
    var _this = this;

    if (this.props.actions) {
      return this.props.actions.map(function (action, index) {
        return React.createElement(_this.props.components.Action, {
          action: action,
          key: "action-" + index,
          data: _this.props.data,
          size: _this.props.size
        });
      });
    }

    return null;
  };

  return MTableActions;
}(React.Component);
MTableActions.defaultProps = {
  actions: [],
  data: {}
};
MTableActions.propTypes = {
  components: PropTypes.object.isRequired,
  actions: PropTypes.array.isRequired,
  data:
  /*#__PURE__*/
  PropTypes.oneOfType([PropTypes.object,
  /*#__PURE__*/
  PropTypes.arrayOf(PropTypes.object)]),
  size: PropTypes.string
};

var MTableBody =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MTableBody, _React$Component);

  function MTableBody() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MTableBody.prototype;

  _proto.renderEmpty = function renderEmpty(emptyRowCount, renderData) {
    var _this = this;

    var rowHeight = this.props.options.padding === 'default' ? 49 : 36;

    var localization = _extends({}, MTableBody.defaultProps.localization, {}, this.props.localization);

    if (this.props.options.showEmptyDataSourceMessage && renderData.length === 0) {
      var addColumn = 0;

      if (this.props.options.selection || this.props.actions && this.props.actions.filter(function (a) {
        return !a.isFreeAction && !_this.props.options.selection;
      }).length > 0) {
        addColumn++;
      }

      if (this.props.hasDetailPanel) {
        addColumn++;
      }

      if (this.props.isTreeData) {
        addColumn++;
      }

      return React.createElement(core.TableRow, {
        style: {
          height: rowHeight * (this.props.options.paging && this.props.options.emptyRowsWhenPaging ? this.props.pageSize : 1)
        },
        key: 'empty-' + 0
      }, React.createElement(core.TableCell, {
        style: {
          paddingTop: 0,
          paddingBottom: 0,
          textAlign: 'center'
        },
        colSpan: this.props.columns.length + addColumn,
        key: "empty-"
      }, localization.emptyDataSourceMessage));
    } else if (this.props.options.emptyRowsWhenPaging) {
      return React.createElement(React.Fragment, null, [].concat(Array(emptyRowCount)).map(function (r, index) {
        return React.createElement(core.TableRow, {
          style: {
            height: rowHeight
          },
          key: 'empty-' + index
        });
      }), emptyRowCount > 0 && React.createElement(core.TableRow, {
        style: {
          height: 1
        },
        key: 'empty-last1'
      }));
    }
  };

  _proto.renderUngroupedRows = function renderUngroupedRows(renderData) {
    var _this2 = this;

    return renderData.map(function (data, index) {
      if (data.tableData.editing) {
        return React.createElement(_this2.props.components.EditRow, {
          columns: _this2.props.columns.filter(function (columnDef) {
            return !columnDef.hidden;
          }),
          components: _this2.props.components,
          data: data,
          icons: _this2.props.icons,
          localization: _extends({}, MTableBody.defaultProps.localization.editRow, {}, _this2.props.localization.editRow),
          key: index,
          mode: data.tableData.editing,
          options: _this2.props.options,
          isTreeData: _this2.props.isTreeData,
          detailPanel: _this2.props.detailPanel,
          onEditingCanceled: _this2.props.onEditingCanceled,
          onEditingApproved: _this2.props.onEditingApproved,
          getFieldValue: _this2.props.getFieldValue
        });
      } else {
        return React.createElement(_this2.props.components.Row, {
          components: _this2.props.components,
          icons: _this2.props.icons,
          data: data,
          index: index,
          key: 'row-' + data.tableData.id,
          level: 0,
          options: _this2.props.options,
          localization: _extends({}, MTableBody.defaultProps.localization.editRow, {}, _this2.props.localization.editRow),
          onRowSelected: _this2.props.onRowSelected,
          actions: _this2.props.actions,
          columns: _this2.props.columns,
          getFieldValue: _this2.props.getFieldValue,
          detailPanel: _this2.props.detailPanel,
          path: [index + _this2.props.pageSize * _this2.props.currentPage],
          onToggleDetailPanel: _this2.props.onToggleDetailPanel,
          onRowClick: _this2.props.onRowClick,
          isTreeData: _this2.props.isTreeData,
          onTreeExpandChanged: _this2.props.onTreeExpandChanged,
          onEditingCanceled: _this2.props.onEditingCanceled,
          onEditingApproved: _this2.props.onEditingApproved,
          hasAnyEditingRow: _this2.props.hasAnyEditingRow,
          treeDataMaxLevel: _this2.props.treeDataMaxLevel
        });
      }
    });
  };

  _proto.renderGroupedRows = function renderGroupedRows(groups, renderData) {
    var _this3 = this;

    return renderData.map(function (groupData, index) {
      return React.createElement(_this3.props.components.GroupRow, {
        actions: _this3.props.actions,
        key: groupData.value == null ? String(index) : groupData.value,
        columns: _this3.props.columns,
        components: _this3.props.components,
        detailPanel: _this3.props.detailPanel,
        getFieldValue: _this3.props.getFieldValue,
        groupData: groupData,
        groups: groups,
        icons: _this3.props.icons,
        level: 0,
        path: [index + _this3.props.pageSize * _this3.props.currentPage],
        onGroupExpandChanged: _this3.props.onGroupExpandChanged,
        onRowSelected: _this3.props.onRowSelected,
        onRowClick: _this3.props.onRowClick,
        onEditingCanceled: _this3.props.onEditingCanceled,
        onEditingApproved: _this3.props.onEditingApproved,
        onToggleDetailPanel: _this3.props.onToggleDetailPanel,
        onTreeExpandChanged: _this3.props.onTreeExpandChanged,
        options: _this3.props.options,
        isTreeData: _this3.props.isTreeData,
        hasAnyEditingRow: _this3.props.hasAnyEditingRow,
        localization: _extends({}, MTableBody.defaultProps.localization.editRow, {}, _this3.props.localization.editRow)
      });
    });
  };

  _proto.render = function render() {
    var _this4 = this;

    var renderData = this.props.renderData;
    var groups = this.props.columns.filter(function (col) {
      return col.tableData.groupOrder > -1;
    }).sort(function (col1, col2) {
      return col1.tableData.groupOrder - col2.tableData.groupOrder;
    });
    var emptyRowCount = 0;

    if (this.props.options.paging) {
      emptyRowCount = this.props.pageSize - renderData.length;
    }

    return React.createElement(core.TableBody, null, this.props.options.filtering && React.createElement(this.props.components.FilterRow, {
      columns: this.props.columns.filter(function (columnDef) {
        return !columnDef.hidden;
      }),
      icons: this.props.icons,
      emptyCell: this.props.options.selection || this.props.actions && this.props.actions.filter(function (a) {
        return !a.isFreeAction && !_this4.props.options.selection;
      }).length > 0,
      hasActions: this.props.actions && this.props.actions.filter(function (a) {
        return !a.isFreeAction && !_this4.props.options.selection;
      }).length > 0,
      actionsColumnIndex: this.props.options.actionsColumnIndex,
      onFilterChanged: this.props.onFilterChanged,
      selection: this.props.options.selection,
      localization: _extends({}, MTableBody.defaultProps.localization.filterRow, {}, this.props.localization.filterRow),
      hasDetailPanel: Boolean(this.props.detailPanel),
      isTreeData: this.props.isTreeData,
      filterCellStyle: this.props.options.filterCellStyle
    }), this.props.showAddRow && this.props.options.addRowPosition === 'first' && React.createElement(this.props.components.EditRow, {
      columns: this.props.columns.filter(function (columnDef) {
        return !columnDef.hidden;
      }),
      data: this.props.initialFormData,
      components: this.props.components,
      icons: this.props.icons,
      key: "key-add-row",
      mode: "add",
      localization: _extends({}, MTableBody.defaultProps.localization.editRow, {}, this.props.localization.editRow),
      options: this.props.options,
      isTreeData: this.props.isTreeData,
      detailPanel: this.props.detailPanel,
      onEditingCanceled: this.props.onEditingCanceled,
      onEditingApproved: this.props.onEditingApproved,
      getFieldValue: this.props.getFieldValue
    }), groups.length > 0 ? this.renderGroupedRows(groups, renderData) : this.renderUngroupedRows(renderData), this.props.showAddRow && this.props.options.addRowPosition === 'last' && React.createElement(this.props.components.EditRow, {
      columns: this.props.columns.filter(function (columnDef) {
        return !columnDef.hidden;
      }),
      data: this.props.initialFormData,
      components: this.props.components,
      icons: this.props.icons,
      key: "key-add-row",
      mode: "add",
      localization: _extends({}, MTableBody.defaultProps.localization.editRow, {}, this.props.localization.editRow),
      options: this.props.options,
      isTreeData: this.props.isTreeData,
      detailPanel: this.props.detailPanel,
      onEditingCanceled: this.props.onEditingCanceled,
      onEditingApproved: this.props.onEditingApproved,
      getFieldValue: this.props.getFieldValue
    }), this.renderEmpty(emptyRowCount, renderData));
  };

  return MTableBody;
}(React.Component);
MTableBody.defaultProps = {
  actions: [],
  currentPage: 0,
  pageSize: 5,
  renderData: [],
  selection: false,
  localization: {
    emptyDataSourceMessage: 'No records to display',
    filterRow: {},
    editRow: {}
  }
};
MTableBody.propTypes = {
  actions: PropTypes.array,
  components: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  currentPage: PropTypes.number,
  detailPanel:
  /*#__PURE__*/
  PropTypes.oneOfType([PropTypes.func,
  /*#__PURE__*/
  PropTypes.arrayOf(
  /*#__PURE__*/
  PropTypes.oneOfType([PropTypes.object, PropTypes.func]))]),
  getFieldValue: PropTypes.func.isRequired,
  hasAnyEditingRow: PropTypes.bool,
  hasDetailPanel: PropTypes.bool.isRequired,
  icons: PropTypes.object.isRequired,
  isTreeData: PropTypes.bool.isRequired,
  onRowSelected: PropTypes.func,
  options: PropTypes.object.isRequired,
  pageSize: PropTypes.number,
  renderData: PropTypes.array,
  initialFormData: PropTypes.object,
  selection: PropTypes.bool.isRequired,
  showAddRow: PropTypes.bool,
  treeDataMaxLevel: PropTypes.number,
  localization: PropTypes.object,
  onFilterChanged: PropTypes.func,
  onGroupExpandChanged: PropTypes.func,
  onToggleDetailPanel: PropTypes.func.isRequired,
  onTreeExpandChanged: PropTypes.func.isRequired,
  onRowClick: PropTypes.func,
  onEditingCanceled: PropTypes.func,
  onEditingApproved: PropTypes.func
};

var MTableBodyRow =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MTableBodyRow, _React$Component);

  function MTableBodyRow() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.rotateIconStyle = function (isOpen) {
      return {
        transform: isOpen ? 'rotate(90deg)' : 'none'
      };
    };

    _this.getElementSize = function () {
      return _this.props.options.padding === 'default' ? 'medium' : 'small';
    };

    return _this;
  }

  var _proto = MTableBodyRow.prototype;

  _proto.renderColumns = function renderColumns() {
    var _this2 = this;

    var size = this.getElementSize();
    var mapArr = this.props.columns.filter(function (columnDef) {
      return !columnDef.hidden && !(columnDef.tableData.groupOrder > -1);
    }).sort(function (a, b) {
      return a.tableData.columnOrder - b.tableData.columnOrder;
    }).map(function (columnDef) {
      var value = _this2.props.getFieldValue(_this2.props.data, columnDef);

      return React.createElement(_this2.props.components.Cell, {
        size: size,
        icons: _this2.props.icons,
        columnDef: columnDef,
        value: value,
        key: 'cell-' + _this2.props.data.tableData.id + '-' + columnDef.tableData.id,
        rowData: _this2.props.data
      });
    });
    return mapArr;
  };

  _proto.renderActions = function renderActions() {
    var _this3 = this;

    var actions = this.props.actions.filter(function (a) {
      return !a.isFreeAction && !_this3.props.options.selection;
    });
    return React.createElement(core.TableCell, {
      padding: "none",
      key: "key-actions-column",
      style: _extends({
        width: 42 * actions.length,
        padding: '0px 5px'
      }, this.props.options.actionsCellStyle)
    }, React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, React.createElement(this.props.components.Actions, {
      data: this.props.data,
      actions: actions,
      components: this.props.components
    })));
  };

  _proto.renderSelectionColumn = function renderSelectionColumn() {
    var _this4 = this;

    var checkboxProps = this.props.options.selectionProps || {};

    if (typeof checkboxProps === 'function') {
      checkboxProps = checkboxProps(this.props.data);
    }

    var size = this.getElementSize();
    var baseIconSize = size === 'medium' ? 42 : 26;
    var styles = size === 'medium' ? {
      marginLeft: this.props.level * 9
    } : {
      padding: '4px',
      marginLeft: 5 + this.props.level * 9
    };
    return React.createElement(core.TableCell, {
      size: this.getElementSize(),
      padding: "none",
      key: "key-selection-column",
      style: {
        width: baseIconSize + 9 * (this.props.treeDataMaxLevel - 1)
      }
    }, React.createElement(core.Checkbox, Object.assign({
      size: size,
      checked: this.props.data.tableData.checked === true,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      value: this.props.data.tableData.id.toString(),
      onChange: function onChange(event) {
        return _this4.props.onRowSelected(event, _this4.props.path, _this4.props.data);
      },
      style: styles
    }, checkboxProps)));
  };

  _proto.renderDetailPanelColumn = function renderDetailPanelColumn() {
    var _this5 = this;

    var CustomIcon = function CustomIcon(_ref) {
      var icon = _ref.icon,
          style = _ref.style;
      return typeof icon === 'string' ? React.createElement(core.Icon, {
        style: style
      }, icon) : React.createElement(icon, {
        style: style
      });
    };

    if (typeof this.props.detailPanel == 'function') {
      return React.createElement(core.TableCell, {
        size: this.getElementSize(),
        padding: "none",
        key: "key-detail-panel-column",
        style: {
          width: 42,
          textAlign: 'center'
        }
      }, React.createElement(core.IconButton, {
        size: this.getElementSize(),
        style: _extends({
          transition: 'all ease 200ms'
        }, this.rotateIconStyle(this.props.data.tableData.showDetailPanel)),
        onClick: function onClick(event) {
          _this5.props.onToggleDetailPanel(_this5.props.path, _this5.props.detailPanel);

          event.stopPropagation();
        }
      }, React.createElement(this.props.icons.DetailPanel, null)));
    } else {
      return React.createElement(core.TableCell, {
        size: this.getElementSize(),
        padding: "none",
        key: "key-detail-panel-column"
      }, React.createElement("div", {
        style: {
          width: 42 * this.props.detailPanel.length,
          textAlign: 'center',
          display: 'flex'
        }
      }, this.props.detailPanel.map(function (panel, index) {
        if (typeof panel === 'function') {
          panel = panel(_this5.props.data);
        }

        var isOpen = (_this5.props.data.tableData.showDetailPanel || '').toString() === panel.render.toString();
        var iconButton = React.createElement(_this5.props.icons.DetailPanel, null);
        var animation = true;

        if (isOpen) {
          if (panel.openIcon) {
            iconButton = React.createElement(CustomIcon, {
              icon: panel.openIcon
            });
            animation = false;
          } else if (panel.icon) {
            iconButton = React.createElement(CustomIcon, {
              icon: panel.icon
            });
          }
        } else if (panel.icon) {
          iconButton = React.createElement(CustomIcon, {
            icon: panel.icon
          });
          animation = false;
        }

        iconButton = React.createElement(core.IconButton, {
          size: _this5.getElementSize(),
          key: 'key-detail-panel-' + index,
          style: _extends({
            transition: 'all ease 200ms'
          }, _this5.rotateIconStyle(animation && isOpen)),
          disabled: panel.disabled,
          onClick: function onClick(event) {
            _this5.props.onToggleDetailPanel(_this5.props.path, panel.render);

            event.stopPropagation();
          }
        }, iconButton);

        if (panel.tooltip) {
          iconButton = React.createElement(core.Tooltip, {
            key: 'key-detail-panel-' + index,
            title: panel.tooltip
          }, iconButton);
        }

        return iconButton;
      })));
    }
  };

  _proto.getStyle = function getStyle(index, level) {
    var style = {
      transition: 'all ease 300ms'
    };

    if (typeof this.props.options.rowStyle === 'function') {
      style = _extends({}, style, {}, this.props.options.rowStyle(this.props.data, index, level));
    } else if (this.props.options.rowStyle) {
      style = _extends({}, style, {}, this.props.options.rowStyle);
    }

    if (this.props.onRowClick) {
      style.cursor = 'pointer';
    }

    if (this.props.hasAnyEditingRow) {
      style.opacity = 0.2;
    }

    return style;
  };

  _proto.render = function render() {
    var _this6 = this;

    var renderColumns = this.renderColumns();

    if (this.props.options.selection) {
      renderColumns.splice(0, 0, this.renderSelectionColumn());
    }

    if (this.props.actions && this.props.actions.filter(function (a) {
      return !a.isFreeAction && !_this6.props.options.selection;
    }).length > 0) {
      if (this.props.options.actionsColumnIndex === -1) {
        renderColumns.push(this.renderActions());
      } else if (this.props.options.actionsColumnIndex >= 0) {
        var endPos = 0;

        if (this.props.options.selection) {
          endPos = 1;
        }

        renderColumns.splice(this.props.options.actionsColumnIndex + endPos, 0, this.renderActions());
      }
    }

    if (this.props.isTreeData) {
      if (this.props.data.tableData.childRows && this.props.data.tableData.childRows.length > 0) {
        renderColumns.splice(0, 0, React.createElement(core.TableCell, {
          padding: "none",
          key: 'key-tree-data-column',
          style: {
            width: 48 + 9 * (this.props.treeDataMaxLevel - 2)
          }
        }, React.createElement(core.IconButton, {
          size: this.getElementSize(),
          style: _extends({
            transition: 'all ease 200ms',
            marginLeft: this.props.level * 9
          }, this.rotateIconStyle(this.props.data.tableData.isTreeExpanded)),
          onClick: function onClick(event) {
            _this6.props.onTreeExpandChanged(_this6.props.path, _this6.props.data);

            event.stopPropagation();
          }
        }, React.createElement(this.props.icons.DetailPanel, null))));
      } else {
        renderColumns.splice(0, 0, React.createElement(core.TableCell, {
          padding: "none",
          key: 'key-tree-data-column'
        }));
      }
    }

    if (this.props.detailPanel) {
      if (this.props.options.detailPanelColumnAlignment === 'right') {
        renderColumns.push(this.renderDetailPanelColumn());
      } else {
        renderColumns.splice(0, 0, this.renderDetailPanelColumn());
      }
    }

    this.props.columns.filter(function (columnDef) {
      return columnDef.tableData.groupOrder > -1;
    }).forEach(function (columnDef) {
      renderColumns.splice(0, 0, React.createElement(core.TableCell, {
        padding: "none",
        key: 'key-group-cell' + columnDef.tableData.id
      }));
    });

    var _this$props = this.props,
        detailPanel = _this$props.detailPanel,
        onRowClick = _this$props.onRowClick,
        onToggleDetailPanel = _this$props.onToggleDetailPanel,
        onEditingCanceled = _this$props.onEditingCanceled,
        onEditingApproved = _this$props.onEditingApproved,
        hasAnyEditingRow = _this$props.hasAnyEditingRow,
        treeDataMaxLevel = _this$props.treeDataMaxLevel,
        rowProps = _objectWithoutPropertiesLoose(_this$props, ["icons", "data", "columns", "components", "detailPanel", "getFieldValue", "isTreeData", "onRowClick", "onRowSelected", "onTreeExpandChanged", "onToggleDetailPanel", "onEditingCanceled", "onEditingApproved", "options", "hasAnyEditingRow", "treeDataMaxLevel"]);

    return React.createElement(React.Fragment, null, React.createElement(core.TableRow, Object.assign({
      selected: hasAnyEditingRow
    }, rowProps, {
      hover: onRowClick ? true : false,
      style: this.getStyle(this.props.index, this.props.level),
      onClick: function onClick(event) {
        onRowClick && onRowClick(event, _this6.props.data, function (panelIndex) {
          var panel = detailPanel;

          if (Array.isArray(panel)) {
            panel = panel[panelIndex || 0].render;
          }

          onToggleDetailPanel(_this6.props.path, panel);
        });
      }
    }), renderColumns), this.props.data.tableData.childRows && this.props.data.tableData.isTreeExpanded && this.props.data.tableData.childRows.map(function (data, index) {
      if (data.tableData.editing) {
        return React.createElement(_this6.props.components.EditRow, {
          columns: _this6.props.columns.filter(function (columnDef) {
            return !columnDef.hidden;
          }),
          components: _this6.props.components,
          data: data,
          icons: _this6.props.icons,
          localization: _this6.props.localization,
          key: index,
          mode: data.tableData.editing,
          options: _this6.props.options,
          isTreeData: _this6.props.isTreeData,
          detailPanel: _this6.props.detailPanel,
          onEditingCanceled: onEditingCanceled,
          onEditingApproved: onEditingApproved
        });
      } else {
        return React.createElement(_this6.props.components.Row, Object.assign({}, _this6.props, {
          data: data,
          index: index,
          key: index,
          level: _this6.props.level + 1,
          path: [].concat(_this6.props.path, [index]),
          onEditingCanceled: onEditingCanceled,
          onEditingApproved: onEditingApproved,
          hasAnyEditingRow: _this6.props.hasAnyEditingRow,
          treeDataMaxLevel: treeDataMaxLevel
        }));
      }
    }), this.props.data.tableData && this.props.data.tableData.showDetailPanel && React.createElement(core.TableRow, null, React.createElement(core.TableCell, {
      colSpan: renderColumns.length,
      padding: "none"
    }, this.props.data.tableData.showDetailPanel(this.props.data))));
  };

  return MTableBodyRow;
}(React.Component);
MTableBodyRow.defaultProps = {
  actions: [],
  index: 0,
  data: {},
  options: {},
  path: []
};
MTableBodyRow.propTypes = {
  actions: PropTypes.array,
  icons: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  detailPanel:
  /*#__PURE__*/
  PropTypes.oneOfType([PropTypes.func,
  /*#__PURE__*/
  PropTypes.arrayOf(
  /*#__PURE__*/
  PropTypes.oneOfType([PropTypes.object, PropTypes.func]))]),
  hasAnyEditingRow: PropTypes.bool,
  options: PropTypes.object.isRequired,
  onRowSelected: PropTypes.func,
  path:
  /*#__PURE__*/
  PropTypes.arrayOf(PropTypes.number),
  treeDataMaxLevel: PropTypes.number,
  getFieldValue: PropTypes.func.isRequired,
  columns: PropTypes.array,
  onToggleDetailPanel: PropTypes.func.isRequired,
  onRowClick: PropTypes.func,
  onEditingApproved: PropTypes.func,
  onEditingCanceled: PropTypes.func
};

var MTableGroupbar =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MTableGroupbar, _React$Component);

  function MTableGroupbar(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.getItemStyle = function (isDragging, draggableStyle) {
      return _extends({
        userSelect: 'none',
        margin: "0 " + 8 + "px 0 0"
      }, draggableStyle);
    };

    _this.getListStyle = function () {
      return {
        background: '#0000000a',
        display: 'flex',
        width: '100%',
        padding: 8,
        overflow: 'auto',
        border: '1px solid #ccc',
        borderStyle: 'dashed'
      };
    };

    _this.state = {};
    return _this;
  }

  var _proto = MTableGroupbar.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return React.createElement(core.Toolbar, {
      style: {
        padding: 0,
        minHeight: 'unset'
      }
    }, React.createElement(reactBeautifulDnd.Droppable, {
      droppableId: "groups",
      direction: "horizontal",
      placeholder: "Deneme"
    }, function (provided) {
      return React.createElement("div", {
        ref: provided.innerRef,
        style: _this2.getListStyle()
      }, _this2.props.groupColumns.length > 0 && React.createElement(core.Typography, {
        variant: "caption",
        style: {
          padding: 8
        }
      }, _this2.props.localization.groupedBy), _this2.props.groupColumns.map(function (columnDef, index) {
        return React.createElement(reactBeautifulDnd.Draggable, {
          key: columnDef.tableData.id,
          draggableId: columnDef.tableData.id.toString(),
          index: index
        }, function (provided, snapshot) {
          return React.createElement("div", Object.assign({
            ref: provided.innerRef
          }, provided.draggableProps, provided.dragHandleProps, {
            style: _this2.getItemStyle(snapshot.isDragging, provided.draggableProps.style)
          }), React.createElement(core.Chip, Object.assign({}, provided.dragHandleProps, {
            onClick: function onClick() {
              return _this2.props.onSortChanged(columnDef);
            },
            label: React.createElement("div", null, React.createElement("div", {
              style: {
                "float": 'left'
              }
            }, columnDef.title), columnDef.tableData.groupSort && React.createElement(_this2.props.icons.SortArrow, {
              style: {
                transition: '300ms ease all',
                transform: columnDef.tableData.groupSort === 'asc' ? 'rotate(-180deg)' : 'none',
                fontSize: 18
              }
            })),
            style: {
              boxShadow: 'none',
              textTransform: 'none'
            },
            onDelete: function onDelete() {
              return _this2.props.onGroupRemoved(columnDef, index);
            }
          })));
        });
      }), _this2.props.groupColumns.length === 0 && React.createElement(core.Typography, {
        variant: "caption",
        style: {
          padding: 8
        }
      }, _this2.props.localization.placeholder), provided.placeholder);
    }));
  };

  return MTableGroupbar;
}(React.Component);
MTableGroupbar.defaultProps = {};
MTableGroupbar.propTypes = {
  localization:
  /*#__PURE__*/
  PropTypes.shape({
    groupedBy: PropTypes.string,
    placeholder: PropTypes.string
  })
};

var MTableGroupRow =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MTableGroupRow, _React$Component);

  function MTableGroupRow() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.rotateIconStyle = function (isOpen) {
      return {
        transform: isOpen ? 'rotate(90deg)' : 'none'
      };
    };

    return _this;
  }

  var _proto = MTableGroupRow.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var colSpan = this.props.columns.filter(function (columnDef) {
      return !columnDef.hidden;
    }).length;
    this.props.options.selection && colSpan++;
    this.props.detailPanel && colSpan++;
    this.props.actions && this.props.actions.length > 0 && colSpan++;
    var column = this.props.groups[this.props.level];
    var detail;

    if (this.props.groupData.isExpanded) {
      if (this.props.groups.length > this.props.level + 1) {
        detail = this.props.groupData.groups.map(function (groupData, index) {
          return React.createElement(_this2.props.components.GroupRow, {
            actions: _this2.props.actions,
            key: groupData.value || String(index),
            columns: _this2.props.columns,
            components: _this2.props.components,
            detailPanel: _this2.props.detailPanel,
            getFieldValue: _this2.props.getFieldValue,
            groupData: groupData,
            groups: _this2.props.groups,
            icons: _this2.props.icons,
            level: _this2.props.level + 1,
            path: [].concat(_this2.props.path, [index]),
            onGroupExpandChanged: _this2.props.onGroupExpandChanged,
            onRowSelected: _this2.props.onRowSelected,
            onRowClick: _this2.props.onRowClick,
            onToggleDetailPanel: _this2.props.onToggleDetailPanel,
            onTreeExpandChanged: _this2.props.onTreeExpandChanged,
            onEditingCanceled: _this2.props.onEditingCanceled,
            onEditingApproved: _this2.props.onEditingApproved,
            options: _this2.props.options,
            hasAnyEditingRow: _this2.props.hasAnyEditingRow,
            isTreeData: _this2.props.isTreeData
          });
        });
      } else {
        detail = this.props.groupData.data.map(function (rowData, index) {
          if (rowData.tableData.editing) {
            return React.createElement(_this2.props.components.EditRow, {
              columns: _this2.props.columns,
              components: _this2.props.components,
              data: rowData,
              icons: _this2.props.icons,
              path: [].concat(_this2.props.path, [index]),
              localization: _this2.props.localization,
              key: index,
              mode: rowData.tableData.editing,
              options: _this2.props.options,
              isTreeData: _this2.props.isTreeData,
              detailPanel: _this2.props.detailPanel,
              onEditingCanceled: _this2.props.onEditingCanceled,
              onEditingApproved: _this2.props.onEditingApproved,
              getFieldValue: _this2.props.getFieldValue
            });
          } else {
            return React.createElement(_this2.props.components.Row, {
              actions: _this2.props.actions,
              key: index,
              columns: _this2.props.columns,
              components: _this2.props.components,
              data: rowData,
              detailPanel: _this2.props.detailPanel,
              getFieldValue: _this2.props.getFieldValue,
              icons: _this2.props.icons,
              path: [].concat(_this2.props.path, [index]),
              onRowSelected: _this2.props.onRowSelected,
              onRowClick: _this2.props.onRowClick,
              onToggleDetailPanel: _this2.props.onToggleDetailPanel,
              options: _this2.props.options,
              isTreeData: _this2.props.isTreeData,
              onTreeExpandChanged: _this2.props.onTreeExpandChanged,
              onEditingCanceled: _this2.props.onEditingCanceled,
              onEditingApproved: _this2.props.onEditingApproved,
              hasAnyEditingRow: _this2.props.hasAnyEditingRow
            });
          }
        });
      }
    }

    var freeCells = [];

    for (var i = 0; i < this.props.level; i++) {
      freeCells.push(React.createElement(core.TableCell, {
        padding: "checkbox",
        key: i
      }));
    }

    var value = this.props.groupData.value;

    if (column.lookup) {
      value = column.lookup[value];
    }

    var title = column.title;

    if (typeof title !== 'string') {
      title = React.cloneElement(title);
    }

    return React.createElement(React.Fragment, null, React.createElement(core.TableRow, null, freeCells, React.createElement(this.props.components.Cell, {
      colSpan: colSpan,
      padding: "none",
      columnDef: column,
      value: value,
      icons: this.props.icons
    }, React.createElement(core.IconButton, {
      style: _extends({
        transition: 'all ease 200ms'
      }, this.rotateIconStyle(this.props.groupData.isExpanded)),
      onClick: function onClick() {
        _this2.props.onGroupExpandChanged(_this2.props.path);
      }
    }, React.createElement(this.props.icons.DetailPanel, null)), React.createElement("b", null, title + ': '))), detail);
  };

  return MTableGroupRow;
}(React.Component);
MTableGroupRow.defaultProps = {
  columns: [],
  groups: [],
  options: {},
  level: 0
};
MTableGroupRow.propTypes = {
  actions: PropTypes.array,
  columns:
  /*#__PURE__*/
  PropTypes.arrayOf(PropTypes.object),
  components: PropTypes.object,
  detailPanel:
  /*#__PURE__*/
  PropTypes.oneOfType([PropTypes.func,
  /*#__PURE__*/
  PropTypes.arrayOf(PropTypes.object)]),
  getFieldValue: PropTypes.func,
  groupData: PropTypes.object,
  groups:
  /*#__PURE__*/
  PropTypes.arrayOf(PropTypes.object),
  hasAnyEditingRow: PropTypes.bool,
  icons: PropTypes.object,
  isTreeData: PropTypes.bool.isRequired,
  level: PropTypes.number,
  localization: PropTypes.object,
  onGroupExpandChanged: PropTypes.func,
  onRowSelected: PropTypes.func,
  onRowClick: PropTypes.func,
  onToggleDetailPanel: PropTypes.func.isRequired,
  onTreeExpandChanged: PropTypes.func.isRequired,
  onEditingCanceled: PropTypes.func,
  onEditingApproved: PropTypes.func,
  options: PropTypes.object,
  path:
  /*#__PURE__*/
  PropTypes.arrayOf(PropTypes.number)
};

var MTableCell =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MTableCell, _React$Component);

  function MTableCell() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.handleClickCell = function (e) {
      if (_this.props.columnDef.disableClick) {
        e.stopPropagation();
      }
    };

    _this.getStyle = function () {
      var cellStyle = {};

      if (typeof _this.props.columnDef.cellStyle === 'function') {
        cellStyle = _extends({}, cellStyle, {}, _this.props.columnDef.cellStyle(_this.props.value, _this.props.rowData));
      } else {
        cellStyle = _extends({}, cellStyle, {}, _this.props.columnDef.cellStyle);
      }

      if (_this.props.columnDef.disableClick) {
        cellStyle.cursor = 'default';
      }

      return _extends({}, _this.props.style, {}, cellStyle);
    };

    return _this;
  }

  var _proto = MTableCell.prototype;

  _proto.getRenderValue = function getRenderValue() {
    if (this.props.columnDef.emptyValue !== undefined && (this.props.value === undefined || this.props.value === null)) {
      return this.getEmptyValue(this.props.columnDef.emptyValue);
    }

    if (this.props.columnDef.render) {
      if (this.props.rowData) {
        return this.props.columnDef.render(this.props.rowData, 'row');
      } else {
        return this.props.columnDef.render(this.props.value, 'group');
      }
    } else if (this.props.columnDef.type === 'boolean') {
      var style = {
        textAlign: 'left',
        verticalAlign: 'middle',
        width: 48
      };

      if (this.props.value) {
        return React.createElement(this.props.icons.Check, {
          style: style
        });
      } else {
        return React.createElement(this.props.icons.ThirdStateCheck, {
          style: style
        });
      }
    } else if (this.props.columnDef.type === 'date') {
      if (this.props.value instanceof Date) {
        return this.props.value.toLocaleDateString();
      } else {
        return this.props.value;
      }
    } else if (this.props.columnDef.type === 'time') {
      if (this.props.value instanceof Date) {
        return this.props.value.toLocaleTimeString();
      } else {
        return this.props.value;
      }
    } else if (this.props.columnDef.type === 'datetime') {
      if (this.props.value instanceof Date) {
        return this.props.value.toLocaleString();
      } else {
        return this.props.value;
      }
    } else if (this.props.columnDef.type === 'currency') {
      return this.getCurrencyValue(this.props.columnDef.currencySetting, this.props.value);
    }

    return this.props.value;
  };

  _proto.getEmptyValue = function getEmptyValue(emptyValue) {
    if (typeof emptyValue === 'function') {
      return this.props.columnDef.emptyValue(this.props.rowData);
    } else {
      return emptyValue;
    }
  };

  _proto.getCurrencyValue = function getCurrencyValue(currencySetting, value) {
    if (currencySetting !== undefined) {
      return new Intl.NumberFormat(currencySetting.locale !== undefined ? currencySetting.locale : 'en-US', {
        style: 'currency',
        currency: currencySetting.currencyCode !== undefined ? currencySetting.currencyCode : 'USD',
        minimumFractionDigits: currencySetting.minimumFractionDigits !== undefined ? currencySetting.minimumFractionDigits : 2,
        maximumFractionDigits: currencySetting.maximumFractionDigits !== undefined ? currencySetting.maximumFractionDigits : 2
      }).format(value !== undefined ? value : 0);
    } else {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(value !== undefined ? value : 0);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        cellProps = _objectWithoutPropertiesLoose(_this$props, ["icons", "columnDef", "rowData"]);

    return React.createElement(core.TableCell, Object.assign({
      size: this.props.size
    }, cellProps, {
      style: this.getStyle(),
      align: ['numeric'].indexOf(this.props.columnDef.type) !== -1 ? 'right' : 'left',
      onClick: this.handleClickCell
    }), this.props.children, this.getRenderValue());
  };

  return MTableCell;
}(React.Component);
MTableCell.defaultProps = {
  columnDef: {},
  value: undefined
};
MTableCell.propTypes = {
  columnDef: PropTypes.object.isRequired,
  value: PropTypes.any,
  rowData: PropTypes.object
};

var byString = function byString(o, s) {
  if (!s) {
    return;
  }

  s = s.replace(/\[(\w+)\]/g, '.$1');
  s = s.replace(/^\./, '');
  var a = s.split('.');

  for (var i = 0, n = a.length; i < n; ++i) {
    var x = a[i];

    if (o && x in o) {
      o = o[x];
    } else {
      return;
    }
  }

  return o;
};
var setByString = function setByString(obj, path, value) {
  var schema = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');
  var pList = path.split('.');
  var len = pList.length;

  for (var i = 0; i < len - 1; i++) {
    var elem = pList[i];
    if (!schema[elem]) schema[elem] = {};
    schema = schema[elem];
  }

  schema[pList[len - 1]] = value;
};

var MTableEditRow =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MTableEditRow, _React$Component);

  function MTableEditRow(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      data: props.data ? JSON.parse(JSON.stringify(props.data)) : _this.createRowData()
    };
    return _this;
  }

  var _proto = MTableEditRow.prototype;

  _proto.createRowData = function createRowData() {
    return this.props.columns.filter(function (column) {
      return column.initialEditValue && column.field;
    }).reduce(function (prev, column) {
      prev[column.field] = column.initialEditValue;
      return prev;
    }, {});
  };

  _proto.renderColumns = function renderColumns() {
    var _this2 = this;

    var mapArr = this.props.columns.filter(function (columnDef) {
      return !columnDef.hidden && !(columnDef.tableData.groupOrder > -1);
    }).sort(function (a, b) {
      return a.tableData.columnOrder - b.tableData.columnOrder;
    }).map(function (columnDef, index) {
      var value = typeof _this2.state.data[columnDef.field] !== 'undefined' ? _this2.state.data[columnDef.field] : byString(_this2.state.data, columnDef.field);

      var allowEditing = false;

      if (columnDef.editable === undefined) {
        allowEditing = true;
      }

      if (columnDef.editable === 'always') {
        allowEditing = true;
      }

      if (columnDef.editable === 'onAdd' && _this2.props.mode === 'add') {
        allowEditing = true;
      }

      if (columnDef.editable === 'onUpdate' && _this2.props.mode === 'update') {
        allowEditing = true;
      }

      if (typeof columnDef.editable === 'function') {
        allowEditing = columnDef.editable(columnDef, _this2.props.data);
      }

      if (!columnDef.field || !allowEditing) {
        var readonlyValue = _this2.props.getFieldValue(_this2.state.data, columnDef);

        return React.createElement(_this2.props.components.Cell, {
          icons: _this2.props.icons,
          columnDef: columnDef,
          value: readonlyValue,
          key: columnDef.tableData.id,
          rowData: _this2.props.data
        });
      } else {
        var editComponent = columnDef.editComponent,
            cellProps = _objectWithoutPropertiesLoose(columnDef, ["editComponent"]);

        var EditComponent = editComponent || _this2.props.components.EditField;
        return React.createElement(core.TableCell, {
          key: columnDef.tableData.id,
          align: ['numeric'].indexOf(columnDef.type) !== -1 ? 'right' : 'left'
        }, React.createElement(EditComponent, {
          key: columnDef.tableData.id,
          columnDef: cellProps,
          value: value,
          rowData: _this2.state.data,
          onChange: function onChange(value) {
            var data = _extends({}, _this2.state.data);

            setByString(data, columnDef.field, value);

            _this2.setState({
              data: data
            });
          },
          onRowDataChange: function onRowDataChange(data) {
            _this2.setState({
              data: data
            });
          }
        }));
      }
    });
    return mapArr;
  };

  _proto.renderActions = function renderActions() {
    var _this3 = this;

    var localization = _extends({}, MTableEditRow.defaultProps.localization, {}, this.props.localization);

    var actions = [{
      icon: this.props.icons.Check,
      tooltip: localization.saveTooltip,
      onClick: function onClick() {
        var newData = _this3.state.data;
        delete newData.tableData;

        _this3.props.onEditingApproved(_this3.props.mode, _this3.state.data, _this3.props.data);
      }
    }, {
      icon: this.props.icons.Clear,
      tooltip: localization.cancelTooltip,
      onClick: function onClick() {
        _this3.props.onEditingCanceled(_this3.props.mode, _this3.props.data);
      }
    }];
    return React.createElement(core.TableCell, {
      padding: "none",
      key: "key-actions-column",
      style: {
        width: 42 * actions.length,
        padding: '0px 5px'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, React.createElement(this.props.components.Actions, {
      data: this.props.data,
      actions: actions,
      components: this.props.components
    })));
  };

  _proto.getStyle = function getStyle() {
    var style = {
      borderBottom: '1px solid red'
    };
    return style;
  };

  _proto.render = function render() {
    var localization = _extends({}, MTableEditRow.defaultProps.localization, {}, this.props.localization);

    var columns;

    if (this.props.mode === 'add' || this.props.mode === 'update') {
      columns = this.renderColumns();
    } else {
      var colSpan = this.props.columns.filter(function (columnDef) {
        return !columnDef.hidden && !(columnDef.tableData.groupOrder > -1);
      }).length;
      columns = [React.createElement(core.TableCell, {
        padding: this.props.options.actionsColumnIndex === 0 ? 'none' : undefined,
        key: "key-selection-cell",
        colSpan: colSpan
      }, React.createElement(core.Typography, {
        variant: "h6"
      }, localization.deleteText))];
    }

    if (this.props.options.selection) {
      columns.splice(0, 0, React.createElement(core.TableCell, {
        padding: "none",
        key: "key-selection-cell"
      }));
    }

    if (this.props.isTreeData) {
      columns.splice(0, 0, React.createElement(core.TableCell, {
        padding: "none",
        key: "key-tree-data-cell"
      }));
    }

    if (this.props.options.actionsColumnIndex === -1) {
      columns.push(this.renderActions());
    } else if (this.props.options.actionsColumnIndex >= 0) {
      var endPos = 0;

      if (this.props.options.selection) {
        endPos = 1;
      }

      if (this.props.isTreeData) {
        endPos = 1;

        if (this.props.options.selection) {
          columns.splice(1, 1);
        }
      }

      columns.splice(this.props.options.actionsColumnIndex + endPos, 0, this.renderActions());
    }

    if (this.props.detailPanel) {
      var alignment = this.props.options.detailPanelColumnAlignment;
      var index = alignment === 'left' ? 0 : columns.length;
      columns.splice(index, 0, React.createElement(core.TableCell, {
        padding: "none",
        key: "key-detail-panel-cell"
      }));
    }

    this.props.columns.filter(function (columnDef) {
      return columnDef.tableData.groupOrder > -1;
    }).forEach(function (columnDef) {
      columns.splice(0, 0, React.createElement(core.TableCell, {
        padding: "none",
        key: 'key-group-cell' + columnDef.tableData.id
      }));
    });

    var _this$props = this.props,
        rowProps = _objectWithoutPropertiesLoose(_this$props, ["detailPanel", "isTreeData", "onRowClick", "onRowSelected", "onTreeExpandChanged", "onToggleDetailPanel", "onEditingApproved", "onEditingCanceled", "getFieldValue"]);

    return React.createElement(React.Fragment, null, React.createElement(core.TableRow, Object.assign({}, rowProps, {
      style: this.getStyle()
    }), columns));
  };

  return MTableEditRow;
}(React.Component);
MTableEditRow.defaultProps = {
  actions: [],
  index: 0,
  options: {},
  path: [],
  localization: {
    saveTooltip: 'Save',
    cancelTooltip: 'Cancel',
    deleteText: 'Are you sure delete this row?'
  }
};
MTableEditRow.propTypes = {
  actions: PropTypes.array,
  icons: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.object,
  detailPanel:
  /*#__PURE__*/
  PropTypes.oneOfType([PropTypes.func,
  /*#__PURE__*/
  PropTypes.arrayOf(
  /*#__PURE__*/
  PropTypes.oneOfType([PropTypes.object, PropTypes.func]))]),
  options: PropTypes.object.isRequired,
  onRowSelected: PropTypes.func,
  path:
  /*#__PURE__*/
  PropTypes.arrayOf(PropTypes.number),
  columns: PropTypes.array,
  onRowClick: PropTypes.func,
  onEditingApproved: PropTypes.func,
  onEditingCanceled: PropTypes.func,
  localization: PropTypes.object,
  getFieldValue: PropTypes.func
};

var MTableEditField =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MTableEditField, _React$Component);

  function MTableEditField() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MTableEditField.prototype;

  _proto.getProps = function getProps() {
    var _this$props = this.props,
        props = _objectWithoutPropertiesLoose(_this$props, ["columnDef", "rowData", "onRowDataChange"]);

    return props;
  };

  _proto.renderLookupField = function renderLookupField() {
    var _this = this;

    return React.createElement(core.Select, Object.assign({}, this.getProps(), {
      value: this.props.value === undefined ? '' : this.props.value,
      onChange: function onChange(event) {
        return _this.props.onChange(event.target.value);
      },
      style: {
        fontSize: 13
      }
    }), Object.keys(this.props.columnDef.lookup).map(function (key) {
      return React.createElement(core.MenuItem, {
        key: key,
        value: key
      }, _this.props.columnDef.lookup[key]);
    }));
  };

  _proto.renderBooleanField = function renderBooleanField() {
    var _this2 = this;

    return React.createElement(core.Checkbox, Object.assign({}, this.getProps(), {
      value: String(this.props.value),
      checked: Boolean(this.props.value),
      onChange: function onChange(event) {
        return _this2.props.onChange(event.target.checked);
      },
      style: {
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0
      }
    }));
  };

  _proto.renderDateField = function renderDateField() {
    return React.createElement(pickers.MuiPickersUtilsProvider, {
      utils: DateFnsUtils
    }, React.createElement(pickers.DatePicker, Object.assign({}, this.getProps(), {
      format: "dd.MM.yyyy",
      value: this.props.value || null,
      onChange: this.props.onChange,
      clearable: true,
      InputProps: {
        style: {
          fontSize: 13
        }
      }
    })));
  };

  _proto.renderTimeField = function renderTimeField() {
    return React.createElement(pickers.MuiPickersUtilsProvider, {
      utils: DateFnsUtils
    }, React.createElement(pickers.TimePicker, Object.assign({}, this.getProps(), {
      format: "HH:mm:ss",
      value: this.props.value || null,
      onChange: this.props.onChange,
      clearable: true,
      InputProps: {
        style: {
          fontSize: 13
        }
      }
    })));
  };

  _proto.renderDateTimeField = function renderDateTimeField() {
    return React.createElement(pickers.MuiPickersUtilsProvider, {
      utils: DateFnsUtils
    }, React.createElement(pickers.DateTimePicker, Object.assign({}, this.getProps(), {
      format: "dd.MM.yyyy HH:mm:ss",
      value: this.props.value || null,
      onChange: this.props.onChange,
      clearable: true,
      InputProps: {
        style: {
          fontSize: 13
        }
      }
    })));
  };

  _proto.renderTextField = function renderTextField() {
    var _this3 = this;

    return React.createElement(core.TextField, Object.assign({}, this.getProps(), {
      style: this.props.columnDef.type === 'numeric' ? {
        "float": 'right'
      } : {},
      type: this.props.columnDef.type === 'numeric' ? 'number' : 'text',
      placeholder: this.props.columnDef.title,
      value: this.props.value === undefined ? '' : this.props.value,
      onChange: function onChange(event) {
        return _this3.props.onChange(event.target.value);
      },
      InputProps: {
        style: {
          fontSize: 13
        }
      }
    }));
  };

  _proto.renderCurrencyField = function renderCurrencyField() {
    return 'ok';
  };

  _proto.render = function render() {
    var component = 'ok';

    if (this.props.columnDef.lookup) {
      component = this.renderLookupField();
    } else if (this.props.columnDef.type === 'boolean') {
      component = this.renderBooleanField();
    } else if (this.props.columnDef.type === 'date') {
      component = this.renderDateField();
    } else if (this.props.columnDef.type === 'time') {
      component = this.renderTimeField();
    } else if (this.props.columnDef.type === 'datetime') {
      component = this.renderDateTimeField();
    } else if (this.props.columnDef.type === 'currency') {
      component = this.renderCurrencyField();
    } else {
      component = this.renderTextField();
    }

    return component;
  };

  return MTableEditField;
}(React.Component);
MTableEditField.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  columnDef: PropTypes.object.isRequired
};

var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
var MTableFilterRow =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MTableFilterRow, _React$Component);

  function MTableFilterRow() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.renderLookupFilter = function (columnDef) {
      return React.createElement(core.FormControl, {
        style: {
          width: '100%'
        }
      }, React.createElement(core.InputLabel, {
        htmlFor: "select-multiple-checkbox"
      }, columnDef.filterPlaceholder), React.createElement(core.Select, {
        multiple: true,
        value: columnDef.tableData.filterValue || [],
        onChange: function onChange(event) {
          _this.props.onFilterChanged(columnDef.tableData.id, event.target.value);
        },
        input: React.createElement(core.Input, {
          id: "select-multiple-checkbox"
        }),
        renderValue: function renderValue(selecteds) {
          return selecteds.map(function (selected) {
            return columnDef.lookup[selected];
          }).join(', ');
        },
        MenuProps: MenuProps
      }, Object.keys(columnDef.lookup).map(function (key) {
        return React.createElement(core.MenuItem, {
          key: key,
          value: key
        }, React.createElement(core.Checkbox, {
          checked: columnDef.tableData.filterValue ? columnDef.tableData.filterValue.indexOf(key.toString()) > -1 : false
        }), React.createElement(core.ListItemText, {
          primary: columnDef.lookup[key]
        }));
      })));
    };

    _this.renderBooleanFilter = function (columnDef) {
      return React.createElement(core.Checkbox, {
        indeterminate: columnDef.tableData.filterValue === undefined,
        checked: columnDef.tableData.filterValue === 'checked',
        onChange: function onChange() {
          var val;

          if (columnDef.tableData.filterValue === undefined) {
            val = 'checked';
          } else if (columnDef.tableData.filterValue === 'checked') {
            val = 'unchecked';
          }

          _this.props.onFilterChanged(columnDef.tableData.id, val);
        }
      });
    };

    _this.renderDefaultFilter = function (columnDef) {
      var localization = _extends({}, MTableFilterRow.defaultProps.localization, {}, _this.props.localization);

      return React.createElement(core.TextField, {
        style: columnDef.type === 'numeric' ? {
          "float": 'right'
        } : {},
        type: columnDef.type === 'numeric' ? 'number' : 'text',
        value: columnDef.tableData.filterValue || '',
        placeholder: columnDef.filterPlaceholder || '',
        onChange: function onChange(event) {
          _this.props.onFilterChanged(columnDef.tableData.id, event.target.value);
        },
        InputProps: {
          startAdornment: React.createElement(core.InputAdornment, {
            position: "start"
          }, React.createElement(core.Tooltip, {
            title: localization.filterTooltip
          }, React.createElement(_this.props.icons.Filter, null)))
        }
      });
    };

    _this.renderDateTypeFilter = function (columnDef) {
      var dateInputElement = null;

      var onDateInputChange = function onDateInputChange(date) {
        return _this.props.onFilterChanged(columnDef.tableData.id, date);
      };

      if (columnDef.type === 'date') {
        dateInputElement = React.createElement(pickers.DatePicker, {
          value: columnDef.tableData.filterValue || null,
          onChange: onDateInputChange,
          clearable: true
        });
      } else if (columnDef.type === 'datetime') {
        dateInputElement = React.createElement(pickers.DateTimePicker, {
          value: columnDef.tableData.filterValue || null,
          onChange: onDateInputChange,
          clearable: true
        });
      } else if (columnDef.type === 'time') {
        dateInputElement = React.createElement(pickers.TimePicker, {
          value: columnDef.tableData.filterValue || null,
          onChange: onDateInputChange,
          clearable: true
        });
      }

      return React.createElement(pickers.MuiPickersUtilsProvider, {
        utils: DateFnsUtils
      }, dateInputElement);
    };

    return _this;
  }

  var _proto = MTableFilterRow.prototype;

  _proto.getComponentForColumn = function getComponentForColumn(columnDef) {
    if (columnDef.filtering === false) {
      return null;
    }

    if (columnDef.field || columnDef.customFilterAndSearch) {
      if (columnDef.lookup) {
        return this.renderLookupFilter(columnDef);
      } else if (columnDef.type === 'boolean') {
        return this.renderBooleanFilter(columnDef);
      } else if (['date', 'datetime', 'time'].includes(columnDef.type)) {
        return this.renderDateTypeFilter(columnDef);
      } else {
        return this.renderDefaultFilter(columnDef);
      }
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var columns = this.props.columns.filter(function (columnDef) {
      return !columnDef.hidden && !(columnDef.tableData.groupOrder > -1);
    }).sort(function (a, b) {
      return a.tableData.columnOrder - b.tableData.columnOrder;
    }).map(function (columnDef) {
      return React.createElement(core.TableCell, {
        key: columnDef.tableData.id,
        style: _extends({}, _this2.props.filterCellStyle, {}, columnDef.filterCellStyle)
      }, _this2.getComponentForColumn(columnDef));
    });

    if (this.props.selection) {
      columns.splice(0, 0, React.createElement(core.TableCell, {
        padding: "none",
        key: "key-selection-column"
      }));
    }

    if (this.props.emptyCell && this.props.hasActions) {
      if (this.props.actionsColumnIndex === -1) {
        columns.push(React.createElement(core.TableCell, {
          key: "key-action-column"
        }));
      } else {
        var endPos = 0;

        if (this.props.selection) {
          endPos = 1;
        }

        columns.splice(this.props.actionsColumnIndex + endPos, 0, React.createElement(core.TableCell, {
          key: "key-action-column"
        }));
      }
    }

    if (this.props.hasDetailPanel) {
      columns.splice(0, 0, React.createElement(core.TableCell, {
        padding: "none",
        key: "key-detail-panel-column"
      }));
    }

    if (this.props.isTreeData > 0) {
      columns.splice(0, 0, React.createElement(core.TableCell, {
        padding: "none",
        key: 'key-tree-data-filter'
      }));
    }

    this.props.columns.filter(function (columnDef) {
      return columnDef.tableData.groupOrder > -1;
    }).forEach(function (columnDef) {
      columns.splice(0, 0, React.createElement(core.TableCell, {
        padding: "checkbox",
        key: 'key-group-filter' + columnDef.tableData.id
      }));
    });
    return React.createElement(core.TableRow, {
      style: {
        height: 10
      }
    }, columns);
  };

  return MTableFilterRow;
}(React.Component);
MTableFilterRow.defaultProps = {
  emptyCell: false,
  columns: [],
  selection: false,
  hasActions: false,
  localization: {
    filterTooltip: 'Filter'
  }
};
MTableFilterRow.propTypes = {
  emptyCell: PropTypes.bool,
  columns: PropTypes.array.isRequired,
  hasDetailPanel: PropTypes.bool.isRequired,
  isTreeData: PropTypes.bool.isRequired,
  onFilterChanged: PropTypes.func.isRequired,
  filterCellStyle: PropTypes.object,
  selection: PropTypes.bool.isRequired,
  actionsColumnIndex: PropTypes.number,
  hasActions: PropTypes.bool,
  localization: PropTypes.object
};

var MTableHeaderInner =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MTableHeaderInner, _React$Component);

  function MTableHeaderInner() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MTableHeaderInner.prototype;

  _proto.renderHeader = function renderHeader() {
    var _this = this;

    var mapArr = this.props.columns.filter(function (columnDef) {
      return !columnDef.hidden && !(columnDef.tableData.groupOrder > -1);
    }).sort(function (a, b) {
      return a.tableData.columnOrder - b.tableData.columnOrder;
    }).map(function (columnDef, index) {
      var content = columnDef.title;

      if (_this.props.draggable) {
        content = React.createElement(reactBeautifulDnd.Draggable, {
          key: columnDef.tableData.id,
          draggableId: columnDef.tableData.id.toString(),
          index: index
        }, function (provided) {
          return React.createElement("div", Object.assign({
            ref: provided.innerRef
          }, provided.draggableProps, provided.dragHandleProps), columnDef.title);
        });
      }

      if (columnDef.sorting !== false && _this.props.sorting) {
        content = React.createElement(core.TableSortLabel, {
          IconComponent: _this.props.icons.SortArrow,
          active: _this.props.orderBy === columnDef.tableData.id,
          direction: _this.props.orderDirection || 'asc',
          onClick: function onClick() {
            var orderDirection = columnDef.tableData.id !== _this.props.orderBy ? 'asc' : _this.props.orderDirection === 'asc' ? 'desc' : _this.props.orderDirection === 'desc' ? '' : _this.props.orderDirection === '' ? 'asc' : 'desc';

            _this.props.onOrderChange(columnDef.tableData.id, orderDirection);
          }
        }, content);
      }

      return React.createElement(core.TableCell, {
        key: columnDef.tableData.id,
        align: ['numeric'].indexOf(columnDef.type) !== -1 ? 'right' : 'left',
        className: _this.props.classes.header,
        style: _extends({}, _this.props.headerStyle, {}, columnDef.headerStyle)
      }, content);
    });
    return mapArr;
  };

  _proto.renderActionsHeader = function renderActionsHeader() {
    var localization = _extends({}, MTableHeader.defaultProps.localization, {}, this.props.localization);

    return React.createElement(core.TableCell, {
      key: "key-actions-column",
      padding: "checkbox",
      className: this.props.classes.header,
      style: _extends({}, this.props.headerStyle, {
        textAlign: 'center'
      })
    }, React.createElement(core.TableSortLabel, {
      disabled: true
    }, localization.actions));
  };

  _proto.renderSelectionHeader = function renderSelectionHeader() {
    var _this2 = this;

    return React.createElement(core.TableCell, {
      padding: "none",
      key: "key-selection-column",
      className: this.props.classes.header,
      style: _extends({}, this.props.headerStyle)
    }, this.props.showSelectAllCheckbox && React.createElement(core.Checkbox, {
      indeterminate: this.props.selectedCount > 0 && this.props.selectedCount < this.props.dataCount,
      checked: this.props.dataCount > 0 && this.props.selectedCount === this.props.dataCount,
      onChange: function onChange(event, checked) {
        return _this2.props.onAllSelected && _this2.props.onAllSelected(checked);
      }
    }));
  };

  _proto.renderDetailPanelColumnCell = function renderDetailPanelColumnCell() {
    return React.createElement(core.TableCell, {
      padding: "none",
      key: "key-detail-panel-column",
      className: this.props.classes.header,
      style: _extends({}, this.props.headerStyle)
    });
  };

  _proto.render = function render() {
    var _this3 = this;

    var headers = this.renderHeader();

    if (this.props.hasSelection) {
      headers.splice(0, 0, this.renderSelectionHeader());
    }

    if (this.props.showActionsColumn) {
      if (this.props.actionsHeaderIndex >= 0) {
        var endPos = 0;

        if (this.props.hasSelection) {
          endPos = 1;
        }

        headers.splice(this.props.actionsHeaderIndex + endPos, 0, this.renderActionsHeader());
      } else if (this.props.actionsHeaderIndex === -1) {
        headers.push(this.renderActionsHeader());
      }
    }

    if (this.props.hasDetailPanel) {
      if (this.props.detailPanelColumnAlignment === 'right') {
        headers.push(this.renderDetailPanelColumnCell());
      } else {
        headers.splice(0, 0, this.renderDetailPanelColumnCell());
      }
    }

    if (this.props.isTreeData > 0) {
      headers.splice(0, 0, React.createElement(core.TableCell, {
        padding: "none",
        key: 'key-tree-data-header',
        className: this.props.classes.header,
        style: _extends({}, this.props.headerStyle)
      }));
    }

    this.props.columns.filter(function (columnDef) {
      return columnDef.tableData.groupOrder > -1;
    }).forEach(function (columnDef) {
      headers.splice(0, 0, React.createElement(core.TableCell, {
        padding: "checkbox",
        key: 'key-group-header' + columnDef.tableData.id,
        className: _this3.props.classes.header
      }));
    });
    return React.createElement(core.TableHead, null, React.createElement(core.TableRow, null, headers));
  };

  return MTableHeaderInner;
}(React.Component);
var styles = function styles(theme) {
  return core.createStyles({
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      backgroundColor: theme.palette.background.paper
    }
  });
};
var MTableHeader =
/*#__PURE__*/
core.withStyles(styles)(MTableHeaderInner);
MTableHeader.defaultProps = {
  dataCount: 0,
  hasSelection: false,
  headerStyle: {},
  selectedCount: 0,
  sorting: true,
  localization: {
    actions: 'Actions'
  },
  orderBy: undefined,
  orderDirection: 'asc',
  actionsHeaderIndex: 0,
  detailPanelColumnAlignment: 'left',
  draggable: true
};
MTableHeader.propTypes = {
  columns: PropTypes.array.isRequired,
  dataCount: PropTypes.number,
  hasDetailPanel: PropTypes.bool.isRequired,
  detailPanelColumnAlignment: PropTypes.string,
  hasSelection: PropTypes.bool,
  headerStyle: PropTypes.object,
  localization: PropTypes.object,
  selectedCount: PropTypes.number,
  sorting: PropTypes.bool,
  onAllSelected: PropTypes.func,
  onOrderChange: PropTypes.func,
  orderBy: PropTypes.number,
  orderDirection: PropTypes.string,
  actionsHeaderIndex: PropTypes.number,
  showActionsColumn: PropTypes.bool,
  showSelectAllCheckbox: PropTypes.bool,
  draggable: PropTypes.bool
};

var MTablePaginationInner =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MTablePaginationInner, _React$Component);

  function MTablePaginationInner() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.handleFirstPageButtonClick = function (event) {
      _this.props.onChangePage(event, 0);
    };

    _this.handleBackButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page - 1);
    };

    _this.handleNextButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page + 1);
    };

    _this.handleLastPageButtonClick = function (event) {
      _this.props.onChangePage(event, Math.max(0, Math.ceil(_this.props.count / _this.props.rowsPerPage) - 1));
    };

    return _this;
  }

  var _proto = MTablePaginationInner.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        classes = _this$props.classes,
        count = _this$props.count,
        page = _this$props.page,
        rowsPerPage = _this$props.rowsPerPage,
        theme = _this$props.theme,
        showFirstLastPageButtons = _this$props.showFirstLastPageButtons;

    var localization = _extends({}, MTablePaginationInner.defaultProps.localization, {}, this.props.localization);

    return React.createElement("div", {
      className: classes.root
    }, showFirstLastPageButtons && React.createElement(core.Tooltip, {
      title: localization.firstTooltip
    }, React.createElement("span", null, React.createElement(core.IconButton, {
      onClick: this.handleFirstPageButtonClick,
      disabled: page === 0,
      "aria-label": localization.firstAriaLabel
    }, theme.direction === 'rtl' ? React.createElement(this.props.icons.LastPage, null) : React.createElement(this.props.icons.FirstPage, null)))), React.createElement(core.Tooltip, {
      title: localization.previousTooltip
    }, React.createElement("span", null, React.createElement(core.IconButton, {
      onClick: this.handleBackButtonClick,
      disabled: page === 0,
      "aria-label": localization.previousAriaLabel
    }, theme.direction === 'rtl' ? React.createElement(this.props.icons.NextPage, null) : React.createElement(this.props.icons.PreviousPage, null)))), React.createElement(core.Typography, {
      variant: "caption",
      style: {
        flex: 1,
        textAlign: 'center',
        alignSelf: 'center',
        flexBasis: 'inherit'
      }
    }, localization.labelDisplayedRows.replace('{from}', this.props.page * this.props.rowsPerPage + 1).replace('{to}', Math.min((this.props.page + 1) * this.props.rowsPerPage, this.props.count)).replace('{count}', this.props.count)), React.createElement(core.Tooltip, {
      title: localization.nextTooltip
    }, React.createElement("span", null, React.createElement(core.IconButton, {
      onClick: this.handleNextButtonClick,
      disabled: page >= Math.ceil(count / rowsPerPage) - 1,
      "aria-label": localization.nextAriaLabel
    }, theme.direction === 'rtl' ? React.createElement(this.props.icons.PreviousPage, null) : React.createElement(this.props.icons.NextPage, null)))), showFirstLastPageButtons && React.createElement(core.Tooltip, {
      title: localization.lastTooltip
    }, React.createElement("span", null, React.createElement(core.IconButton, {
      onClick: this.handleLastPageButtonClick,
      disabled: page >= Math.ceil(count / rowsPerPage) - 1,
      "aria-label": localization.lastAriaLabel
    }, theme.direction === 'rtl' ? React.createElement(this.props.icons.FirstPage, null) : React.createElement(this.props.icons.LastPage, null)))));
  };

  return MTablePaginationInner;
}(React.Component);

var actionsStyles = function actionsStyles(theme) {
  return {
    root: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      display: 'flex'
    }
  };
};

MTablePaginationInner.propTypes = {
  onChangePage: PropTypes.func,
  page: PropTypes.number,
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  classes: PropTypes.object,
  localization: PropTypes.object,
  theme: PropTypes.any,
  showFirstLastPageButtons: PropTypes.bool
};
MTablePaginationInner.defaultProps = {
  showFirstLastPageButtons: true,
  localization: {
    firstTooltip: 'First Page',
    previousTooltip: 'Previous Page',
    nextTooltip: 'Next Page',
    lastTooltip: 'Last Page',
    labelDisplayedRows: '{from}-{to} of {count}',
    labelRowsPerPage: 'Rows per page:'
  }
};
var MTablePagination =
/*#__PURE__*/
core.withStyles(actionsStyles, {
  withTheme: true
})(MTablePaginationInner);

var MTableSteppedPaginationInner =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MTableSteppedPaginationInner, _React$Component);

  function MTableSteppedPaginationInner() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.handleFirstPageButtonClick = function (event) {
      _this.props.onChangePage(event, 0);
    };

    _this.handleBackButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page - 1);
    };

    _this.handleNextButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page + 1);
    };

    _this.handleNumberButtonClick = function (number) {
      return function (event) {
        _this.props.onChangePage(event, number);
      };
    };

    _this.handleLastPageButtonClick = function (event) {
      _this.props.onChangePage(event, Math.max(0, Math.ceil(_this.props.count / _this.props.rowsPerPage) - 1));
    };

    return _this;
  }

  var _proto = MTableSteppedPaginationInner.prototype;

  _proto.renderPagesButton = function renderPagesButton(start, end) {
    var buttons = [];

    for (var p = start; p <= end; p++) {
      var buttonVariant = p === this.props.page ? 'contained' : undefined;
      buttons.push(React.createElement(core.Button, {
        size: "small",
        style: {
          boxShadow: 'none',
          maxWidth: '30px',
          maxHeight: '30px',
          minWidth: '30px',
          minHeight: '30px'
        },
        disabled: p === this.props.page,
        variant: buttonVariant,
        onClick: this.handleNumberButtonClick(p),
        key: p
      }, p + 1));
    }

    return React.createElement("span", null, buttons);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        classes = _this$props.classes,
        count = _this$props.count,
        page = _this$props.page,
        rowsPerPage = _this$props.rowsPerPage;

    var localization = _extends({}, MTableSteppedPaginationInner.defaultProps.localization, {}, this.props.localization);

    var maxPages = Math.ceil(count / rowsPerPage) - 1;
    var pageStart = Math.max(page - 1, 0);
    var pageEnd = Math.min(maxPages, page + 1);
    return React.createElement("div", {
      className: classes.root
    }, React.createElement(core.Tooltip, {
      title: localization.previousTooltip
    }, React.createElement("span", null, React.createElement(core.IconButton, {
      onClick: this.handleBackButtonClick,
      disabled: page === 0,
      "aria-label": localization.previousAriaLabel
    }, React.createElement(this.props.icons.PreviousPage, null)))), React.createElement(core.Hidden, {
      smDown: true
    }, this.renderPagesButton(pageStart, pageEnd)), React.createElement(core.Tooltip, {
      title: localization.nextTooltip
    }, React.createElement("span", null, React.createElement(core.IconButton, {
      onClick: this.handleNextButtonClick,
      disabled: page >= maxPages,
      "aria-label": localization.nextAriaLabel
    }, React.createElement(this.props.icons.NextPage, null)))));
  };

  return MTableSteppedPaginationInner;
}(React.Component);

var actionsStyles$1 = function actionsStyles(theme) {
  return {
    root: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing(2.5)
    }
  };
};

MTableSteppedPaginationInner.propTypes = {
  onChangePage: PropTypes.func,
  page: PropTypes.number,
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  classes: PropTypes.object,
  localization: PropTypes.object
};
MTableSteppedPaginationInner.defaultProps = {
  localization: {
    previousTooltip: 'Previous Page',
    nextTooltip: 'Next Page',
    labelDisplayedRows: '{from}-{to} of {count}',
    labelRowsPerPage: 'Rows per page:'
  }
};
var MTableSteppedPagination =
/*#__PURE__*/
core.withStyles(actionsStyles$1, {
  withTheme: true
})(MTableSteppedPaginationInner);

var MTableToolbarInner =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MTableToolbarInner, _React$Component);

  function MTableToolbarInner(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.defaultExportCsv = function () {
      var columns = _this.props.columns.filter(function (columnDef) {
        return !columnDef.hidden && columnDef.field && columnDef["export"] !== false;
      }).sort(function (a, b) {
        return a.tableData.columnOrder > b.tableData.columnOrder ? 1 : -1;
      });

      var dataToExport = _this.props.exportAllData ? _this.props.data : _this.props.renderData;
      var data = dataToExport.map(function (rowData) {
        return columns.map(function (columnDef) {
          return _this.props.getFieldValue(rowData, columnDef);
        });
      });
      var builder = new filefy.CsvBuilder((_this.props.exportFileName || _this.props.title || 'data') + '.csv');
      builder.setDelimeter(_this.props.exportDelimiter).setColumns(columns.map(function (columnDef) {
        return columnDef.title;
      })).addRows(data).exportFile();
    };

    _this.exportCsv = function () {
      if (_this.props.exportCsv) {
        _this.props.exportCsv(_this.props.columns, _this.props.data);
      } else {
        _this.defaultExportCsv();
      }

      _this.setState({
        exportButtonAnchorEl: null
      });
    };

    _this.state = {
      columnsButtonAnchorEl: null,
      exportButtonAnchorEl: null
    };
    return _this;
  }

  var _proto = MTableToolbarInner.prototype;

  _proto.renderSearch = function renderSearch() {
    var _this2 = this;

    var localization = _extends({}, MTableToolbarInner.defaultProps.localization, {}, this.props.localization);

    if (this.props.search) {
      return this.props.components.SearchField ? React.createElement(this.props.components.SearchField, Object.assign({}, this.props)) : React.createElement(core.TextField, {
        className: this.props.searchFieldAlignment === 'left' && this.props.showTitle === false ? null : this.props.classes.searchField,
        value: this.props.searchText,
        onChange: function onChange(event) {
          return _this2.props.onSearchChanged(event.target.value);
        },
        placeholder: localization.searchPlaceholder,
        InputProps: {
          startAdornment: React.createElement(core.InputAdornment, {
            position: "start"
          }, React.createElement(core.Tooltip, {
            title: localization.searchTooltip
          }, React.createElement(this.props.icons.Search, {
            color: "inherit",
            fontSize: "small"
          }))),
          endAdornment: React.createElement(core.InputAdornment, {
            position: "end"
          }, React.createElement(core.IconButton, {
            disabled: !this.props.searchText,
            onClick: function onClick() {
              return _this2.props.onSearchChanged('');
            }
          }, React.createElement(this.props.icons.ResetSearch, {
            color: "inherit",
            fontSize: "small"
          }))),
          style: this.props.searchFieldStyle
        }
      });
    } else {
      return null;
    }
  };

  _proto.renderDefaultActions = function renderDefaultActions() {
    var _this3 = this;

    var localization = _extends({}, MTableToolbarInner.defaultProps.localization, {}, this.props.localization);

    return React.createElement("div", null, this.props.columnsButton && React.createElement("span", null, React.createElement(core.Tooltip, {
      title: localization.showColumnsTitle
    }, React.createElement(core.IconButton, {
      color: "inherit",
      onClick: function onClick(event) {
        return _this3.setState({
          columnsButtonAnchorEl: event.currentTarget
        });
      },
      "aria-label": localization.showColumnsAriaLabel
    }, React.createElement(this.props.icons.ViewColumn, null))), React.createElement(core.Menu, {
      anchorEl: this.state.columnsButtonAnchorEl,
      open: Boolean(this.state.columnsButtonAnchorEl),
      onClose: function onClose() {
        return _this3.setState({
          columnsButtonAnchorEl: null
        });
      }
    }, React.createElement(core.MenuItem, {
      key: 'text',
      disabled: true,
      style: {
        opacity: 1,
        fontWeight: 600,
        fontSize: 12
      }
    }, localization.addRemoveColumns), this.props.columns.map(function (col) {
      return React.createElement(core.MenuItem, {
        key: col.tableData.id,
        disabled: col.removable === false,
        onClick: function onClick() {
          return _this3.props.onColumnsChanged(col, !col.hidden);
        }
      }, React.createElement(core.FormControlLabel, {
        label: col.title,
        control: React.createElement(core.Checkbox, {
          checked: !col.hidden
        })
      }));
    }))), this.props.exportButton && React.createElement("span", null, React.createElement(core.Tooltip, {
      title: localization.exportTitle
    }, React.createElement(core.IconButton, {
      color: "inherit",
      onClick: function onClick(event) {
        return _this3.setState({
          exportButtonAnchorEl: event.currentTarget
        });
      },
      "aria-label": localization.exportAriaLabel
    }, React.createElement(this.props.icons.Export, null))), React.createElement(core.Menu, {
      anchorEl: this.state.exportButtonAnchorEl,
      open: Boolean(this.state.exportButtonAnchorEl),
      onClose: function onClose() {
        return _this3.setState({
          exportButtonAnchorEl: null
        });
      }
    }, React.createElement(core.MenuItem, {
      key: "export-csv",
      onClick: this.exportCsv
    }, localization.exportName))), React.createElement("span", null, React.createElement(this.props.components.Actions, {
      actions: this.props.actions && this.props.actions.filter(function (a) {
        return a.isFreeAction;
      }),
      components: this.props.components
    })));
  };

  _proto.renderSelectedActions = function renderSelectedActions() {
    return React.createElement(React.Fragment, null, React.createElement(this.props.components.Actions, {
      actions: this.props.actions.filter(function (a) {
        return !a.isFreeAction;
      }),
      data: this.props.selectedRows,
      components: this.props.components
    }));
  };

  _proto.renderActions = function renderActions() {
    var classes = this.props.classes;
    return React.createElement("div", {
      className: classes.actions
    }, React.createElement("div", null, this.props.selectedRows && this.props.selectedRows.length > 0 ? this.renderSelectedActions() : this.renderDefaultActions()));
  };

  _proto.render = function render() {
    var _classNames;

    var classes = this.props.classes;

    var localization = _extends({}, MTableToolbarInner.defaultProps.localization, {}, this.props.localization);

    var title = this.props.showTextRowsSelected && this.props.selectedRows && this.props.selectedRows.length > 0 ? localization.nRowsSelected.replace('{0}', this.props.selectedRows.length) : this.props.showTitle ? this.props.title : null;
    return React.createElement(core.Toolbar, {
      className: classNames(classes.root, (_classNames = {}, _classNames[classes.highlight] = this.props.showTextRowsSelected && this.props.selectedRows && this.props.selectedRows.length > 0, _classNames))
    }, title && React.createElement("div", {
      className: classes.title
    }, React.createElement(core.Typography, {
      variant: "h6"
    }, title)), this.props.searchFieldAlignment === 'left' && this.renderSearch(), this.props.toolbarButtonAlignment === 'left' && this.renderActions(), React.createElement("div", {
      className: classes.spacer
    }), this.props.searchFieldAlignment === 'right' && this.renderSearch(), this.props.toolbarButtonAlignment === 'right' && this.renderActions());
  };

  return MTableToolbarInner;
}(React.Component);

MTableToolbarInner.defaultProps = {
  actions: [],
  columns: [],
  columnsButton: false,
  localization: {
    addRemoveColumns: 'Add or remove columns',
    nRowsSelected: '{0} row(s) selected',
    showColumnsTitle: 'Show Columns',
    showColumnsAriaLabel: 'Show Columns',
    exportTitle: 'Export',
    exportAriaLabel: 'Export',
    exportName: 'Export as CSV',
    searchTooltip: 'Search',
    searchPlaceholder: 'Search'
  },
  search: true,
  showTitle: true,
  showTextRowsSelected: true,
  toolbarButtonAlignment: 'right',
  searchFieldAlignment: 'right',
  searchText: '',
  selectedRows: [],
  title: 'No Title!'
};
MTableToolbarInner.propTypes = {
  actions: PropTypes.array,
  columns: PropTypes.array,
  columnsButton: PropTypes.bool,
  components: PropTypes.object.isRequired,
  getFieldValue: PropTypes.func.isRequired,
  localization: PropTypes.object.isRequired,
  onColumnsChanged: PropTypes.func.isRequired,
  onSearchChanged: PropTypes.func.isRequired,
  search: PropTypes.bool.isRequired,
  searchFieldStyle: PropTypes.object,
  searchText: PropTypes.string.isRequired,
  selectedRows: PropTypes.array,
  title:
  /*#__PURE__*/
  PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  showTitle: PropTypes.bool.isRequired,
  showTextRowsSelected: PropTypes.bool.isRequired,
  toolbarButtonAlignment: PropTypes.string.isRequired,
  searchFieldAlignment: PropTypes.string.isRequired,
  renderData: PropTypes.array,
  data: PropTypes.array,
  exportAllData: PropTypes.bool,
  exportButton: PropTypes.bool,
  exportDelimiter: PropTypes.string,
  exportFileName: PropTypes.string,
  exportCsv: PropTypes.func,
  classes: PropTypes.object
};
var styles$1 = function styles(theme) {
  return {
    root: {
      paddingRight: theme.spacing(1)
    },
    highlight: theme.palette.type === 'light' ? {
      color: theme.palette.secondary.main,
      backgroundColor: colorManipulator.lighten(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    spacer: {
      flex: '1 1 10%'
    },
    actions: {
      color: theme.palette.text.secondary
    },
    title: {
      flex: '0 0 auto'
    },
    searchField: {
      paddingLeft: theme.spacing(2)
    }
  };
};
var MTableToolbar =
/*#__PURE__*/
core.withStyles(styles$1)(MTableToolbarInner);

var OverlayLoading = function OverlayLoading(props) {
  return React.createElement("div", {
    style: {
      display: 'table',
      width: '100%',
      height: '100%',
      backgroundColor: colorManipulator.fade(props.theme.palette.background.paper, 0.7)
    }
  }, React.createElement("div", {
    style: {
      display: 'table-cell',
      width: '100%',
      height: '100%',
      verticalAlign: 'middle',
      textAlign: 'center'
    }
  }, React.createElement(core.CircularProgress, null)));
};

OverlayLoading.propTypes = {
  theme: PropTypes.any
};

var Container = function Container(props) {
  return React.createElement(core.Paper, Object.assign({
    elevation: 2
  }, props));
};

var defaultProps = {
  actions: [],
  classes: {},
  columns: [],
  components: {
    Action: MTableAction,
    Actions: MTableActions,
    Body: MTableBody,
    Cell: MTableCell,
    Container: Container,
    EditField: MTableEditField,
    EditRow: MTableEditRow,
    FilterRow: MTableFilterRow,
    Groupbar: MTableGroupbar,
    GroupRow: MTableGroupRow,
    Header: MTableHeader,
    OverlayLoading: OverlayLoading,
    Pagination: core.TablePagination,
    Row: MTableBodyRow,
    Toolbar: MTableToolbar
  },
  data: [],
  icons: {
    Add:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "add_box");
    }),
    Check:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "check");
    }),
    Clear:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "clear");
    }),
    Delete:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "delete_outline");
    }),
    DetailPanel:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "chevron_right");
    }),
    Edit:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "edit");
    }),
    Export:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "save_alt");
    }),
    Filter:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "filter_list");
    }),
    FirstPage:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "first_page");
    }),
    LastPage:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "last_page");
    }),
    NextPage:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "chevron_right");
    }),
    PreviousPage:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "chevron_left");
    }),
    ResetSearch:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "clear");
    }),
    Search:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "search");
    }),
    SortArrow:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "arrow_downward");
    }),
    ThirdStateCheck:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "remove");
    }),
    ViewColumn:
    /*#__PURE__*/
    React.forwardRef(function (props, ref) {
      return React.createElement(core.Icon, Object.assign({}, props, {
        ref: ref
      }), "view_column");
    })
  },
  isLoading: false,
  title: 'Table Title',
  options: {
    actionsColumnIndex: 0,
    addRowPosition: 'last',
    columnsButton: false,
    detailPanelType: 'multiple',
    debounceInterval: 200,
    doubleHorizontalScroll: false,
    emptyRowsWhenPaging: true,
    exportAllData: false,
    exportButton: false,
    exportDelimiter: ',',
    filtering: false,
    header: true,
    loadingType: 'overlay',
    padding: 'default',
    paging: true,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
    paginationType: 'normal',
    showEmptyDataSourceMessage: true,
    showFirstLastPageButtons: true,
    showSelectAllCheckbox: true,
    search: true,
    showTitle: true,
    showTextRowsSelected: true,
    toolbarButtonAlignment: 'right',
    searchFieldAlignment: 'right',
    searchFieldStyle: {},
    selection: false,
    selectionProps: {},
    sorting: true,
    toolbar: true,
    defaultExpanded: false,
    detailPanelColumnAlignment: 'left',
    flexTable: false
  },
  localization: {
    grouping: {
      groupedBy: 'Grouped By:',
      placeholder: 'Drag headers here to group by'
    },
    pagination: {
      labelDisplayedRows: '{from}-{to} of {count}',
      labelRowsPerPage: 'Rows per page:',
      labelRowsSelect: 'rows'
    },
    toolbar: {},
    header: {},
    body: {
      filterRow: {},
      editRow: {
        saveTooltip: 'Save',
        cancelTooltip: 'Cancel',
        deleteText: 'Are you sure you want to delete this row?'
      },
      addTooltip: 'Add',
      deleteTooltip: 'Delete',
      editTooltip: 'Edit'
    }
  },
  style: {},
  preFooterRow: null,
  searchText: ''
};

var RefComponent =
/*#__PURE__*/
PropTypes.shape({
  current: PropTypes.element
});
var StyledComponent =
/*#__PURE__*/
PropTypes.shape({
  classes: PropTypes.object,
  innerRef: RefComponent
});
var propTypes = {
  actions:
  /*#__PURE__*/
  PropTypes.arrayOf(
  /*#__PURE__*/
  PropTypes.oneOfType([PropTypes.func,
  /*#__PURE__*/
  PropTypes.shape({
    icon:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.string]).isRequired,
    isFreeAction: PropTypes.bool,
    tooltip: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    iconProps: PropTypes.object,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool
  })])),
  columns:
  /*#__PURE__*/
  PropTypes.arrayOf(
  /*#__PURE__*/
  PropTypes.shape({
    cellStyle:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    currencySetting:
    /*#__PURE__*/
    PropTypes.shape({
      locale: PropTypes.string,
      currencyCode: PropTypes.string,
      minimumFractionDigits: PropTypes.number,
      maximumFractionDigits: PropTypes.number
    }),
    customFilterAndSearch: PropTypes.func,
    customSort: PropTypes.func,
    defaultFilter: PropTypes.any,
    defaultSort:
    /*#__PURE__*/
    PropTypes.oneOf(['asc', 'desc']),
    editComponent:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    emptyValue:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
    "export": PropTypes.bool,
    field: PropTypes.string,
    filtering: PropTypes.bool,
    filterCellStyle: PropTypes.object,
    filterPlaceholder: PropTypes.string,
    grouping: PropTypes.bool,
    headerStyle: PropTypes.object,
    hidden: PropTypes.bool,
    initialEditValue: PropTypes.any,
    lookup: PropTypes.object,
    editable:
    /*#__PURE__*/
    PropTypes.oneOf(['always', 'onUpdate', 'onAdd', 'never', PropTypes.func]),
    removable: PropTypes.bool,
    render: PropTypes.func,
    searchable: PropTypes.bool,
    sorting: PropTypes.bool,
    title:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    type:
    /*#__PURE__*/
    PropTypes.oneOf(['string', 'boolean', 'numeric', 'date', 'datetime', 'time', 'currency'])
  })).isRequired,
  components:
  /*#__PURE__*/
  PropTypes.shape({
    Action:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, StyledComponent]),
    Actions:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, StyledComponent]),
    Body:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, StyledComponent]),
    Cell:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, StyledComponent]),
    Container:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, StyledComponent]),
    EditField:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, StyledComponent]),
    EditRow:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, StyledComponent]),
    FilterRow:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, StyledComponent]),
    Groupbar:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, StyledComponent]),
    GroupRow:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, StyledComponent]),
    Header:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, StyledComponent]),
    OverlayLoading:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, StyledComponent]),
    Pagination:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, StyledComponent]),
    Row:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, StyledComponent]),
    Toolbar:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, StyledComponent])
  }),
  data:
  /*#__PURE__*/
  PropTypes.oneOfType([
  /*#__PURE__*/
  PropTypes.arrayOf(PropTypes.object), PropTypes.func]).isRequired,
  editable:
  /*#__PURE__*/
  PropTypes.shape({
    onRowAdd: PropTypes.func,
    onRowUpdate: PropTypes.func,
    onRowDelete: PropTypes.func
  }),
  detailPanel:
  /*#__PURE__*/
  PropTypes.oneOfType([PropTypes.func,
  /*#__PURE__*/
  PropTypes.arrayOf(
  /*#__PURE__*/
  PropTypes.oneOfType([PropTypes.func,
  /*#__PURE__*/
  PropTypes.shape({
    disabled: PropTypes.bool,
    icon:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.string]),
    openIcon:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.string]),
    tooltip: PropTypes.string,
    render: PropTypes.func.isRequired
  })]))]),
  icons:
  /*#__PURE__*/
  PropTypes.shape({
    Add:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    Check:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    Clear:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    Delete:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    DetailPanel:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    Edit:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    Export:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    Filter:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    FirstPage:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    LastPage:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    NextPage:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    PreviousPage:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    ResetSearch:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    Search:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    SortArrow:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    ThirdStateCheck:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent]),
    ViewColumn:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, RefComponent])
  }),
  isLoading: PropTypes.bool,
  title:
  /*#__PURE__*/
  PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  options:
  /*#__PURE__*/
  PropTypes.shape({
    actionsCellStyle: PropTypes.object,
    actionsColumnIndex: PropTypes.number,
    addRowPosition:
    /*#__PURE__*/
    PropTypes.oneOf(['first', 'last']),
    columnsButton: PropTypes.bool,
    defaultExpanded: PropTypes.bool,
    debounceInterval: PropTypes.number,
    detailPanelType:
    /*#__PURE__*/
    PropTypes.oneOf(['single', 'multiple']),
    doubleHorizontalScroll: PropTypes.bool,
    emptyRowsWhenPaging: PropTypes.bool,
    exportAllData: PropTypes.bool,
    exportButton: PropTypes.bool,
    exportDelimiter: PropTypes.string,
    exportFileName: PropTypes.string,
    exportCsv: PropTypes.func,
    filtering: PropTypes.bool,
    filterCellStyle: PropTypes.object,
    header: PropTypes.bool,
    headerStyle: PropTypes.object,
    initialPage: PropTypes.number,
    maxBodyHeight:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    loadingType:
    /*#__PURE__*/
    PropTypes.oneOf(['overlay', 'linear']),
    padding:
    /*#__PURE__*/
    PropTypes.oneOf(['default', 'dense']),
    paging: PropTypes.bool,
    pageSize: PropTypes.number,
    pageSizeOptions:
    /*#__PURE__*/
    PropTypes.arrayOf(PropTypes.number),
    paginationType:
    /*#__PURE__*/
    PropTypes.oneOf(['normal', 'stepped']),
    rowStyle:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    search: PropTypes.bool,
    toolbarButtonAlignment:
    /*#__PURE__*/
    PropTypes.oneOf(['left', 'right']),
    searchFieldAlignment:
    /*#__PURE__*/
    PropTypes.oneOf(['left', 'right']),
    searchFieldStyle: PropTypes.object,
    selection: PropTypes.bool,
    selectionProps:
    /*#__PURE__*/
    PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    showEmptyDataSourceMessage: PropTypes.bool,
    showFirstLastPageButtons: PropTypes.bool,
    showSelectAllCheckbox: PropTypes.bool,
    showTitle: PropTypes.bool,
    showTextRowsSelected: PropTypes.bool,
    sorting: PropTypes.bool,
    toolbar: PropTypes.bool
  }),
  localization:
  /*#__PURE__*/
  PropTypes.shape({
    grouping:
    /*#__PURE__*/
    PropTypes.shape({
      groupedBy: PropTypes.string,
      placeholder: PropTypes.string
    }),
    pagination: PropTypes.object,
    toolbar: PropTypes.object,
    header: PropTypes.object,
    body: PropTypes.object
  }),
  initialFormData: PropTypes.object,
  onSearchChange: PropTypes.func,
  onColumnDragged: PropTypes.func,
  onGroupRemoved: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func,
  onChangePage: PropTypes.func,
  onChangeColumnHidden: PropTypes.func,
  onOrderChange: PropTypes.func,
  onRowClick: PropTypes.func,
  onTreeExpandChange: PropTypes.func,
  tableRef: PropTypes.any,
  style: PropTypes.object,
  searchText: PropTypes.string
};

var DataManager =
/*#__PURE__*/
function () {
  function DataManager() {
    var _this = this;

    this.applyFilters = false;
    this.applySearch = false;
    this.currentPage = 0;
    this.detailPanelType = 'multiple';
    this.lastDetailPanelRow = undefined;
    this.lastEditingRow = undefined;
    this.orderBy = -1;
    this.orderDirection = '';
    this.pageSize = 5;
    this.paging = true;
    this.parentFunc = null;
    this.searchText = '';
    this.selectedCount = 0;
    this.treefiedDataLength = 0;
    this.treeDataMaxLevel = 0;
    this.defaultExpanded = false;
    this.data = [];
    this.columns = [];
    this.filteredData = [];
    this.searchedData = [];
    this.groupedData = [];
    this.sortedData = [];
    this.pagedData = [];
    this.renderData = [];
    this.filtered = false;
    this.searched = false;
    this.grouped = false;
    this.treefied = false;
    this.sorted = false;
    this.paged = false;
    this.rootGroupsIndex = {};

    this.expandTreeForNodes = function (data) {
      data.forEach(function (row) {
        var currentRow = row;

        while (_this.parentFunc(currentRow, _this.data)) {
          var parent = _this.parentFunc(currentRow, _this.data);

          if (parent) {
            parent.tableData.isTreeExpanded = true;
          }

          currentRow = parent;
        }
      });
    };

    this.findDataByPath = function (renderData, path) {
      if (_this.isDataType('tree')) {
        var node = path.reduce(function (result, current) {
          return result && result.tableData && result.tableData.childRows && result.tableData.childRows[current];
        }, {
          tableData: {
            childRows: renderData
          }
        });
        return node;
      } else {
        var data = {
          groups: renderData
        };

        var _node = path.reduce(function (result, current) {
          if (result.groups.length > 0) {
            return result.groups[current];
          } else if (result.data) {
            return result.data[current];
          } else {
            return undefined;
          }
        }, data);

        return _node;
      }
    };

    this.getFieldValue = function (rowData, columnDef, lookup) {
      if (lookup === void 0) {
        lookup = true;
      }

      var value = typeof rowData[columnDef.field] !== 'undefined' ? rowData[columnDef.field] : byString(rowData, columnDef.field);

      if (columnDef.lookup && lookup) {
        value = columnDef.lookup[value];
      }

      return value;
    };

    this.getRenderState = function () {
      if (_this.filtered === false) {
        _this.filterData();
      }

      if (_this.searched === false) {
        _this.searchData();
      }

      if (_this.grouped === false && _this.isDataType('group')) {
        _this.groupData();
      }

      if (_this.treefied === false && _this.isDataType('tree')) {
        _this.treefyData();
      }

      if (_this.sorted === false) {
        _this.sortData();
      }

      if (_this.paged === false) {
        _this.pageData();
      }

      return {
        columns: _this.columns,
        currentPage: _this.currentPage,
        data: _this.sortedData,
        lastEditingRow: _this.lastEditingRow,
        orderBy: _this.orderBy,
        orderDirection: _this.orderDirection,
        originalData: _this.data,
        pageSize: _this.pageSize,
        renderData: _this.pagedData,
        searchText: _this.searchText,
        selectedCount: _this.selectedCount,
        treefiedDataLength: _this.treefiedDataLength,
        treeDataMaxLevel: _this.treeDataMaxLevel
      };
    };

    this.filterData = function () {
      _this.searched = _this.grouped = _this.treefied = _this.sorted = _this.paged = false;
      _this.filteredData = [].concat(_this.data);

      if (_this.applyFilters) {
        _this.columns.filter(function (columnDef) {
          return columnDef.tableData.filterValue;
        }).forEach(function (columnDef) {
          var lookup = columnDef.lookup,
              type = columnDef.type,
              tableData = columnDef.tableData;

          if (columnDef.customFilterAndSearch) {
            _this.filteredData = _this.filteredData.filter(function (row) {
              return Boolean(columnDef.customFilterAndSearch(tableData.filterValue, row, columnDef));
            });
          } else {
            if (lookup) {
              _this.filteredData = _this.filteredData.filter(function (row) {
                var value = _this.getFieldValue(row, columnDef, false);

                return !tableData.filterValue || tableData.filterValue.length === 0 || tableData.filterValue.indexOf(value !== undefined && value.toString()) > -1;
              });
            } else if (type === 'numeric') {
              _this.filteredData = _this.filteredData.filter(function (row) {
                var value = _this.getFieldValue(row, columnDef);

                return String(value) === tableData.filterValue;
              });
            } else if (type === 'boolean' && tableData.filterValue) {
              _this.filteredData = _this.filteredData.filter(function (row) {
                var value = _this.getFieldValue(row, columnDef);

                return value && tableData.filterValue === 'checked' || !value && tableData.filterValue === 'unchecked';
              });
            } else if (['date', 'datetime'].includes(type)) {
              _this.filteredData = _this.filteredData.filter(function (row) {
                var value = _this.getFieldValue(row, columnDef);

                var currentDate = value ? new Date(value) : null;

                if (currentDate && currentDate.toString() !== 'Invalid Date') {
                  var selectedDate = tableData.filterValue;
                  var currentDateToCompare = '';
                  var selectedDateToCompare = '';

                  if (type === 'date') {
                    currentDateToCompare = formatDate(currentDate, 'MM/dd/yyyy');
                    selectedDateToCompare = formatDate(selectedDate, 'MM/dd/yyyy');
                  } else if (type === 'datetime') {
                    currentDateToCompare = formatDate(currentDate, 'MM/dd/yyyy - HH:mm');
                    selectedDateToCompare = formatDate(selectedDate, 'MM/dd/yyyy - HH:mm');
                  }

                  return currentDateToCompare === selectedDateToCompare;
                }

                return true;
              });
            } else if (type === 'time') {
              _this.filteredData = _this.filteredData.filter(function (row) {
                var value = _this.getFieldValue(row, columnDef);

                var currentHour = value || null;

                if (currentHour) {
                  var selectedHour = tableData.filterValue;
                  var currentHourToCompare = formatDate(selectedHour, 'HH:mm');
                  return currentHour === currentHourToCompare;
                }

                return true;
              });
            } else {
              _this.filteredData = _this.filteredData.filter(function (row) {
                var value = _this.getFieldValue(row, columnDef);

                return value && value.toString().toUpperCase().includes(tableData.filterValue.toUpperCase());
              });
            }
          }
        });
      }

      _this.filtered = true;
    };

    this.searchData = function () {
      _this.grouped = _this.treefied = _this.sorted = _this.paged = false;
      _this.searchedData = [].concat(_this.filteredData);

      if (_this.searchText && _this.applySearch) {
        _this.searchedData = _this.searchedData.filter(function (row) {
          return _this.columns.filter(function (columnDef) {
            return columnDef.searchable === undefined ? !columnDef.hidden : columnDef.searchable;
          }).some(function (columnDef) {
            if (columnDef.customFilterAndSearch) {
              return Boolean(columnDef.customFilterAndSearch(_this.searchText, row, columnDef));
            } else if (columnDef.field) {
              var value = _this.getFieldValue(row, columnDef);

              if (value) {
                return value.toString().toUpperCase().includes(_this.searchText.toUpperCase());
              }
            }
          });
        });
      }

      _this.searched = true;
    };
  }

  var _proto = DataManager.prototype;

  _proto.setData = function setData(data) {
    var _this2 = this;

    this.selectedCount = 0;
    this.data = data.map(function (row, index) {
      row.tableData = _extends({}, row.tableData, {
        id: index
      });

      if (row.tableData.checked) {
        _this2.selectedCount++;
      }

      return row;
    });
    this.filtered = false;
  };

  _proto.setColumns = function setColumns(columns) {
    this.columns = columns.map(function (columnDef, index) {
      columnDef.tableData = _extends({
        columnOrder: index,
        filterValue: columnDef.defaultFilter,
        groupOrder: columnDef.defaultGroupOrder,
        groupSort: columnDef.defaultGroupSort || 'asc'
      }, columnDef.tableData, {
        id: index
      });
      return columnDef;
    });
  };

  _proto.setDefaultExpanded = function setDefaultExpanded(expanded) {
    this.defaultExpanded = expanded;
  };

  _proto.changeApplySearch = function changeApplySearch(applySearch) {
    this.applySearch = applySearch;
    this.searched = false;
  };

  _proto.changeApplyFilters = function changeApplyFilters(applyFilters) {
    this.applyFilters = applyFilters;
    this.filtered = false;
  };

  _proto.changePaging = function changePaging(paging) {
    this.paging = paging;
    this.paged = false;
  };

  _proto.changeCurrentPage = function changeCurrentPage(currentPage) {
    this.currentPage = currentPage;
    this.paged = false;
  };

  _proto.changePageSize = function changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.paged = false;
  };

  _proto.changeParentFunc = function changeParentFunc(parentFunc) {
    this.parentFunc = parentFunc;
  };

  _proto.changeFilterValue = function changeFilterValue(columnId, value) {
    this.columns[columnId].tableData.filterValue = value;
    this.filtered = false;
  };

  _proto.changeRowSelected = function changeRowSelected(checked, path) {
    var _this3 = this;

    var rowData = this.findDataByPath(this.sortedData, path);
    rowData.tableData.checked = checked;
    this.selectedCount = this.selectedCount + (checked ? 1 : -1);

    var checkChildRows = function checkChildRows(rowData) {
      if (rowData.tableData.childRows) {
        rowData.tableData.childRows.forEach(function (childRow) {
          if (childRow.tableData.checked !== checked) {
            childRow.tableData.checked = checked;
            _this3.selectedCount = _this3.selectedCount + (checked ? 1 : -1);
          }

          checkChildRows(childRow);
        });
      }
    };

    checkChildRows(rowData);
    this.filtered = false;
  };

  _proto.changeDetailPanelVisibility = function changeDetailPanelVisibility(path, render) {
    var rowData = this.findDataByPath(this.sortedData, path);

    if ((rowData.tableData.showDetailPanel || '').toString() === render.toString()) {
      rowData.tableData.showDetailPanel = undefined;
    } else {
      rowData.tableData.showDetailPanel = render;
    }

    if (this.detailPanelType === 'single' && this.lastDetailPanelRow && this.lastDetailPanelRow != rowData) {
      this.lastDetailPanelRow.tableData.showDetailPanel = undefined;
    }

    this.lastDetailPanelRow = rowData;
  };

  _proto.changeGroupExpand = function changeGroupExpand(path) {
    var rowData = this.findDataByPath(this.sortedData, path);
    rowData.isExpanded = !rowData.isExpanded;
  };

  _proto.changeSearchText = function changeSearchText(searchText) {
    this.searchText = searchText;
    this.searched = false;
    this.currentPage = 0;
  };

  _proto.changeRowEditing = function changeRowEditing(rowData, mode) {
    if (rowData) {
      rowData.tableData.editing = mode;

      if (this.lastEditingRow && this.lastEditingRow != rowData) {
        this.lastEditingRow.tableData.editing = undefined;
      }

      if (mode) {
        this.lastEditingRow = rowData;
      } else {
        this.lastEditingRow = undefined;
      }
    } else if (this.lastEditingRow) {
      this.lastEditingRow.tableData.editing = undefined;
      this.lastEditingRow = undefined;
    }
  };

  _proto.changeAllSelected = function changeAllSelected(checked) {
    var selectedCount = 0;

    if (this.isDataType('group')) {
      var setCheck = function setCheck(data) {
        data.forEach(function (element) {
          if (element.groups.length > 0) {
            setCheck(element.groups);
          } else {
            element.data.forEach(function (d) {
              d.tableData.checked = checked;
              selectedCount++;
            });
          }
        });
      };

      setCheck(this.groupedData);
    } else {
      this.searchedData.map(function (row) {
        row.tableData.checked = checked;
        return row;
      });
      selectedCount = this.searchedData.length;
    }

    this.selectedCount = checked ? selectedCount : 0;
  };

  _proto.changeOrder = function changeOrder(orderBy, orderDirection) {
    this.orderBy = orderBy;
    this.orderDirection = orderDirection;
    this.currentPage = 0;
    this.sorted = false;
  };

  _proto.changeGroupOrder = function changeGroupOrder(columnId) {
    var column = this.columns.find(function (c) {
      return c.tableData.id === columnId;
    });

    if (column.tableData.groupSort === 'asc') {
      column.tableData.groupSort = 'desc';
    } else {
      column.tableData.groupSort = 'asc';
    }

    this.sorted = false;
  };

  _proto.changeColumnHidden = function changeColumnHidden(column, hidden) {
    column.hidden = hidden;
  };

  _proto.changeTreeExpand = function changeTreeExpand(path) {
    var rowData = this.findDataByPath(this.sortedData, path);
    rowData.tableData.isTreeExpanded = !rowData.tableData.isTreeExpanded;
  };

  _proto.changeDetailPanelType = function changeDetailPanelType(type) {
    this.detailPanelType = type;
  };

  _proto.changeByDrag = function changeByDrag(result) {
    var start = 0;
    var groups = this.columns.filter(function (col) {
      return col.tableData.groupOrder > -1;
    }).sort(function (col1, col2) {
      return col1.tableData.groupOrder - col2.tableData.groupOrder;
    });

    if (result.destination.droppableId === 'groups' && result.source.droppableId === 'groups') {
      start = Math.min(result.destination.index, result.source.index);
      var end = Math.max(result.destination.index, result.source.index);
      groups = groups.slice(start, end + 1);

      if (result.destination.index < result.source.index) {
        var last = groups.pop();
        groups.unshift(last);
      } else {
        var _last = groups.shift();

        groups.push(_last);
      }
    } else if (result.destination.droppableId === 'groups' && result.source.droppableId === 'headers') {
      var newGroup = this.columns.find(function (c) {
        return c.tableData.id === result.draggableId;
      });

      if (newGroup.grouping === false || !newGroup.field) {
        return;
      }

      groups.splice(result.destination.index, 0, newGroup);
    } else if (result.destination.droppableId === 'headers' && result.source.droppableId === 'groups') {
      var removeGroup = this.columns.find(function (c) {
        return c.tableData.id === result.draggableId;
      });
      removeGroup.tableData.groupOrder = undefined;
      groups.splice(result.source.index, 1);
    } else if (result.destination.droppableId === 'headers' && result.source.droppableId === 'headers') {
      start = Math.min(result.destination.index, result.source.index);

      var _end = Math.max(result.destination.index, result.source.index);

      var colsToMov = this.columns.sort(function (a, b) {
        return a.tableData.columnOrder - b.tableData.columnOrder;
      }).filter(function (column) {
        return column.tableData.groupOrder === undefined;
      }).slice(start, _end + 1);

      if (result.destination.index < result.source.index) {
        var _last2 = colsToMov.pop();

        colsToMov.unshift(_last2);
      } else {
        var _last3 = colsToMov.shift();

        colsToMov.push(_last3);
      }

      for (var i = 0; i < colsToMov.length; i++) {
        colsToMov[i].tableData.columnOrder = start + i;
      }

      return;
    } else {
      return;
    }

    for (var _i = 0; _i < groups.length; _i++) {
      groups[_i].tableData.groupOrder = start + _i;
    }

    this.sorted = this.grouped = false;
  };

  _proto.findGroupByGroupPath = function findGroupByGroupPath(renderData, path) {
    var data = {
      groups: renderData,
      groupsIndex: this.rootGroupsIndex
    };
    var node = path.reduce(function (result, current) {
      if (!result) {
        return undefined;
      }

      if (result.groupsIndex[current] !== undefined) {
        return result.groups[result.groupsIndex[current]];
      }

      return undefined;
    }, data);
    return node;
  };

  _proto.isDataType = function isDataType(type) {
    var dataType = 'normal';

    if (this.parentFunc) {
      dataType = 'tree';
    } else if (this.columns.find(function (a) {
      return a.tableData.groupOrder > -1;
    })) {
      dataType = 'group';
    }

    return type === dataType;
  };

  _proto.sort = function sort(a, b, type) {
    if (type === 'numeric') {
      return a - b;
    } else {
      if (a !== b) {
        if (!a) return -1;
        if (!b) return 1;
      }

      return a < b ? -1 : a > b ? 1 : 0;
    }
  };

  _proto.sortList = function sortList(list) {
    var _this4 = this;

    var columnDef = this.columns.find(function (_) {
      return _.tableData.id === _this4.orderBy;
    });
    var result = list;

    if (columnDef.customSort) {
      if (this.orderDirection === 'desc') {
        result = list.sort(function (a, b) {
          return columnDef.customSort(b, a, 'row');
        });
      } else {
        result = list.sort(function (a, b) {
          return columnDef.customSort(a, b, 'row');
        });
      }
    } else {
      result = list.sort(this.orderDirection === 'desc' ? function (a, b) {
        return _this4.sort(_this4.getFieldValue(b, columnDef), _this4.getFieldValue(a, columnDef), columnDef.type);
      } : function (a, b) {
        return _this4.sort(_this4.getFieldValue(a, columnDef), _this4.getFieldValue(b, columnDef), columnDef.type);
      });
    }

    return result;
  };

  _proto.groupData = function groupData() {
    var _this5 = this;

    this.sorted = this.paged = false;
    var tmpData = [].concat(this.searchedData);
    var groups = this.columns.filter(function (col) {
      return col.tableData.groupOrder > -1;
    }).sort(function (col1, col2) {
      return col1.tableData.groupOrder - col2.tableData.groupOrder;
    });
    var subData = tmpData.reduce(function (result, currentRow) {
      var object = result;
      object = groups.reduce(function (o, colDef) {
        var value = currentRow[colDef.field] || byString(currentRow, colDef.field);
        var group;

        if (o.groupsIndex[value] !== undefined) {
          group = o.groups[o.groupsIndex[value]];
        }

        if (!group) {
          var path = [].concat(o.path || [], [value]);
          var oldGroup = _this5.findGroupByGroupPath(_this5.groupedData, path) || {
            isExpanded: _this5.defaultExpanded ? true : false
          };
          group = {
            value: value,
            groups: [],
            groupsIndex: {},
            data: [],
            isExpanded: oldGroup.isExpanded,
            path: path
          };
          o.groups.push(group);
          o.groupsIndex[value] = o.groups.length - 1;
        }

        return group;
      }, object);
      object.data.push(currentRow);
      return result;
    }, {
      groups: [],
      groupsIndex: {}
    });
    this.groupedData = subData.groups;
    this.grouped = true;
    this.rootGroupsIndex = subData.groupsIndex;
  };

  _proto.treefyData = function treefyData() {
    var _this6 = this;

    this.sorted = this.paged = false;
    this.data.forEach(function (a) {
      return a.tableData.childRows = null;
    });
    this.treefiedData = [];
    this.treefiedDataLength = 0;
    this.treeDataMaxLevel = 0;

    if (this.searchText || this.columns.some(function (columnDef) {
      return columnDef.tableData.filterValue;
    })) {
      this.data.forEach(function (row) {
        row.tableData.isTreeExpanded = false;
      });
      this.expandTreeForNodes(this.searchedData);
    }

    var addRow = function addRow(rowData) {
      rowData.tableData.markedForTreeRemove = false;

      var parent = _this6.parentFunc(rowData, _this6.data);

      if (parent) {
        parent.tableData.childRows = parent.tableData.childRows || [];

        var oldParent = parent.tableData.path && _this6.findDataByPath(_this6.treefiedData, parent.tableData.path);

        var isDefined = oldParent && oldParent.tableData.isTreeExpanded !== undefined;
        parent.tableData.isTreeExpanded = isDefined ? oldParent.tableData.isTreeExpanded : _this6.defaultExpanded ? true : false;

        if (!parent.tableData.childRows.includes(rowData)) {
          parent.tableData.childRows.push(rowData);
          _this6.treefiedDataLength++;
        }

        addRow(parent);
        rowData.tableData.path = [].concat(parent.tableData.path, [parent.tableData.childRows.length - 1]);
        _this6.treeDataMaxLevel = Math.max(_this6.treeDataMaxLevel, rowData.tableData.path.length);
      } else {
        if (!_this6.treefiedData.includes(rowData)) {
          _this6.treefiedData.push(rowData);

          _this6.treefiedDataLength++;
          rowData.tableData.path = [_this6.treefiedData.length - 1];
        }
      }
    };

    this.data.forEach(function (rowData) {
      addRow(rowData);
    });

    var markForTreeRemove = function markForTreeRemove(rowData) {
      var pointer = _this6.treefiedData;
      rowData.tableData.path.forEach(function (pathPart) {
        if (pointer.tableData && pointer.tableData.childRows) {
          pointer = pointer.tableData.childRows;
        }

        pointer = pointer[pathPart];
      });
      pointer.tableData.markedForTreeRemove = true;
    };

    var traverseChildrenAndUnmark = function traverseChildrenAndUnmark(rowData) {
      if (rowData.tableData.childRows) {
        rowData.tableData.childRows.forEach(function (row) {
          traverseChildrenAndUnmark(row);
        });
      }

      rowData.tableData.markedForTreeRemove = false;
    };

    this.data.forEach(function (rowData) {
      if (!_this6.searchText && !_this6.columns.some(function (columnDef) {
        return columnDef.tableData.filterValue;
      })) {
        rowData.tableData.isTreeExpanded = rowData.tableData.isTreeExpanded === undefined ? _this6.defaultExpanded : rowData.tableData.isTreeExpanded;
      }

      var hasSearchMatchedChildren = rowData.tableData.isTreeExpanded;

      if (!hasSearchMatchedChildren && _this6.searchedData.indexOf(rowData) < 0) {
        markForTreeRemove(rowData);
      }
    });
    this.data.forEach(function (rowData) {
      if (_this6.searchedData.indexOf(rowData) > -1) {
        traverseChildrenAndUnmark(rowData);
      }
    });

    var traverseTreeAndDeleteMarked = function traverseTreeAndDeleteMarked(rowDataArray) {
      for (var i = rowDataArray.length - 1; i >= 0; i--) {
        var item = rowDataArray[i];

        if (item.tableData.childRows) {
          traverseTreeAndDeleteMarked(item.tableData.childRows);
        }

        if (item.tableData.markedForTreeRemove) rowDataArray.splice(i, 1);
      }
    };

    traverseTreeAndDeleteMarked(this.treefiedData);
    this.treefied = true;
  };

  _proto.sortData = function sortData() {
    var _this7 = this;

    this.paged = false;

    if (this.isDataType('group')) {
      this.sortedData = [].concat(this.groupedData);
      var groups = this.columns.filter(function (col) {
        return col.tableData.groupOrder > -1;
      }).sort(function (col1, col2) {
        return col1.tableData.groupOrder - col2.tableData.groupOrder;
      });

      var sortGroups = function sortGroups(list, columnDef) {
        if (columnDef.customSort) {
          return list.sort(columnDef.tableData.groupSort === 'desc' ? function (a, b) {
            return columnDef.customSort(b.value, a.value, 'group');
          } : function (a, b) {
            return columnDef.customSort(a.value, b.value, 'group');
          });
        } else {
          return list.sort(columnDef.tableData.groupSort === 'desc' ? function (a, b) {
            return _this7.sort(b.value, a.value, columnDef.type);
          } : function (a, b) {
            return _this7.sort(a.value, b.value, columnDef.type);
          });
        }
      };

      this.sortedData = sortGroups(this.sortedData, groups[0]);

      var sortGroupData = function sortGroupData(list, level) {
        list.forEach(function (element) {
          if (element.groups.length > 0) {
            var column = groups[level];
            element.groups = sortGroups(element.groups, column);
            sortGroupData(element.groups, level + 1);
          } else {
            if (_this7.orderBy >= 0 && _this7.orderDirection) {
              element.data = _this7.sortList(element.data);
            }
          }
        });
      };

      sortGroupData(this.sortedData, 1);
    } else if (this.isDataType('tree')) {
      this.sortedData = [].concat(this.treefiedData);

      if (this.orderBy != -1) {
        this.sortedData = this.sortList(this.sortedData);

        var sortTree = function sortTree(list) {
          list.forEach(function (item) {
            if (item.tableData.childRows) {
              item.tableData.childRows = _this7.sortList(item.tableData.childRows);
              sortTree(item.tableData.childRows);
            }
          });
        };

        sortTree(this.sortedData);
      }
    } else if (this.isDataType('normal')) {
      this.sortedData = [].concat(this.searchedData);

      if (this.orderBy != -1) {
        this.sortedData = this.sortList(this.sortedData);
      }
    }

    this.sorted = true;
  };

  _proto.pageData = function pageData() {
    this.pagedData = [].concat(this.sortedData);

    if (this.paging) {
      var startIndex = this.currentPage * this.pageSize;
      var endIndex = startIndex + this.pageSize;
      this.pagedData = this.pagedData.slice(startIndex, endIndex);
    }

    this.paged = true;
  };

  return DataManager;
}();

var MaterialTable =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MaterialTable, _React$Component);

  function MaterialTable(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.dataManager = new DataManager();

    _this.isRemoteData = function (props) {
      return !Array.isArray((props || _this.props).data);
    };

    _this.onAllSelected = function (checked) {
      _this.dataManager.changeAllSelected(checked);

      _this.setState(_this.dataManager.getRenderState(), function () {
        return _this.onSelectionChange();
      });
    };

    _this.onChangeColumnHidden = function (columnId, hidden) {
      _this.dataManager.changeColumnHidden(columnId, hidden);

      _this.setState(_this.dataManager.getRenderState(), function () {
        _this.props.onChangeColumnHidden && _this.props.onChangeColumnHidden(columnId, hidden);
      });
    };

    _this.onChangeGroupOrder = function (groupedColumn) {
      _this.dataManager.changeGroupOrder(groupedColumn.tableData.id);

      _this.setState(_this.dataManager.getRenderState());
    };

    _this.onChangeOrder = function (orderBy, orderDirection) {
      var newOrderBy = orderDirection === '' ? -1 : orderBy;

      _this.dataManager.changeOrder(newOrderBy, orderDirection);

      if (_this.isRemoteData()) {
        var query = _extends({}, _this.state.query);

        query.page = 0;
        query.orderBy = _this.state.columns.find(function (a) {
          return a.tableData.id === newOrderBy;
        });
        query.orderDirection = orderDirection;

        _this.onQueryChange(query, function () {
          _this.props.onOrderChange && _this.props.onOrderChange(newOrderBy, orderDirection);
        });
      } else {
        _this.setState(_this.dataManager.getRenderState(), function () {
          _this.props.onOrderChange && _this.props.onOrderChange(newOrderBy, orderDirection);
        });
      }
    };

    _this.onChangePage = function (event, page) {
      if (_this.isRemoteData()) {
        var query = _extends({}, _this.state.query);

        query.page = page;

        _this.onQueryChange(query, function () {
          _this.props.onChangePage && _this.props.onChangePage(page);
        });
      } else {
        _this.dataManager.changeCurrentPage(page);

        _this.setState(_this.dataManager.getRenderState(), function () {
          _this.props.onChangePage && _this.props.onChangePage(page);
        });
      }
    };

    _this.onChangeRowsPerPage = function (event) {
      var pageSize = event.target.value;

      _this.dataManager.changePageSize(pageSize);

      if (_this.isRemoteData()) {
        var query = _extends({}, _this.state.query);

        query.pageSize = event.target.value;
        query.page = 0;

        _this.onQueryChange(query, function () {
          _this.props.onChangeRowsPerPage && _this.props.onChangeRowsPerPage(pageSize);
        });
      } else {
        _this.dataManager.changeCurrentPage(0);

        _this.setState(_this.dataManager.getRenderState(), function () {
          _this.props.onChangeRowsPerPage && _this.props.onChangeRowsPerPage(pageSize);
        });
      }
    };

    _this.onDragEnd = function (result) {
      _this.dataManager.changeByDrag(result);

      _this.setState(_this.dataManager.getRenderState(), function () {
        if (_this.props.onColumnDragged && result.destination.droppableId === 'headers' && result.source.droppableId === 'headers') {
          _this.props.onColumnDragged(result.source.index, result.destination.index);
        }
      });
    };

    _this.onGroupExpandChanged = function (path) {
      _this.dataManager.changeGroupExpand(path);

      _this.setState(_this.dataManager.getRenderState());
    };

    _this.onGroupRemoved = function (groupedColumn, index) {
      var result = {
        combine: null,
        destination: {
          droppableId: 'headers',
          index: 0
        },
        draggableId: groupedColumn.tableData.id,
        mode: 'FLUID',
        reason: 'DROP',
        source: {
          index: index,
          droppableId: 'groups'
        },
        type: 'DEFAULT'
      };

      _this.dataManager.changeByDrag(result);

      _this.setState(_this.dataManager.getRenderState(), function () {
        _this.props.onGroupRemoved && _this.props.onGroupRemoved(groupedColumn, index);
      });
    };

    _this.onEditingApproved = function (mode, newData, oldData) {
      if (mode === 'add') {
        _this.setState({
          isLoading: true
        }, function () {
          _this.props.editable.onRowAdd(newData).then(function (_result) {
            _this.setState({
              isLoading: false,
              showAddRow: false
            }, function () {
              if (_this.isRemoteData()) {
                _this.onQueryChange(_this.state.query);
              }
            });
          })["catch"](function (_reason) {
            _this.setState({
              isLoading: false
            });
          });
        });
      } else if (mode === 'update') {
        _this.setState({
          isLoading: true
        }, function () {
          _this.props.editable.onRowUpdate(newData, oldData).then(function (_result) {
            _this.dataManager.changeRowEditing(oldData);

            _this.setState(_extends({
              isLoading: false
            }, _this.dataManager.getRenderState()), function () {
              if (_this.isRemoteData()) {
                _this.onQueryChange(_this.state.query);
              }
            });
          })["catch"](function (_reason) {
            _this.setState({
              isLoading: false
            });
          });
        });
      } else if (mode === 'delete') {
        _this.setState({
          isLoading: true
        }, function () {
          _this.props.editable.onRowDelete(oldData).then(function (_result) {
            _this.dataManager.changeRowEditing(oldData);

            _this.setState(_extends({
              isLoading: false
            }, _this.dataManager.getRenderState()), function () {
              if (_this.isRemoteData()) {
                _this.onQueryChange(_this.state.query);
              }
            });
          })["catch"](function (_reason) {
            _this.setState({
              isLoading: false
            });
          });
        });
      }
    };

    _this.onEditingCanceled = function (mode, rowData) {
      if (mode === 'add') {
        _this.setState({
          showAddRow: false
        });
      } else if (mode === 'update' || mode === 'delete') {
        _this.dataManager.changeRowEditing(rowData);

        _this.setState(_this.dataManager.getRenderState());
      }
    };

    _this.onQueryChange = function (query, callback) {
      query = _extends({}, _this.state.query, {}, query);

      _this.setState({
        isLoading: true
      }, function () {
        _this.props.data(query).then(function (result) {
          query.totalCount = result.totalCount;
          query.page = result.page;

          _this.dataManager.setData(result.data);

          _this.setState(_extends({
            isLoading: false
          }, _this.dataManager.getRenderState(), {
            query: query
          }), function () {
            callback && callback();
          });
        });
      });
    };

    _this.onRowSelected = function (event, path, dataClicked) {
      _this.dataManager.changeRowSelected(event.target.checked, path);

      _this.setState(_this.dataManager.getRenderState(), function () {
        return _this.onSelectionChange(dataClicked);
      });
    };

    _this.onSelectionChange = function (dataClicked) {
      if (_this.props.onSelectionChange) {
        var selectedRows = [];

        var findSelecteds = function findSelecteds(list) {
          list.forEach(function (row) {
            if (row.tableData.checked) {
              selectedRows.push(row);
            }

            row.tableData.childRows && findSelecteds(row.tableData.childRows);
          });
        };

        findSelecteds(_this.state.originalData);

        _this.props.onSelectionChange(selectedRows, dataClicked);
      }
    };

    _this.onSearchChange = function (searchText) {
      return _this.setState({
        searchText: searchText
      }, _this.onSearchChangeDebounce);
    };

    _this.onSearchChangeDebounce = debounce.debounce(function () {
      _this.dataManager.changeSearchText(_this.state.searchText);

      if (_this.isRemoteData()) {
        var query = _extends({}, _this.state.query);

        query.page = 0;
        query.search = _this.state.searchText;

        _this.onQueryChange(query);
      } else {
        _this.setState(_this.dataManager.getRenderState(), function () {
          _this.props.onSearchChange && _this.props.onSearchChange(_this.state.searchText);
        });
      }
    }, _this.props.options.debounceInterval);

    _this.onFilterChange = function (columnId, value) {
      _this.dataManager.changeFilterValue(columnId, value);

      _this.setState({}, _this.onFilterChangeDebounce);
    };

    _this.onFilterChangeDebounce = debounce.debounce(function () {
      if (_this.isRemoteData()) {
        var query = _extends({}, _this.state.query);

        query.page = 0;
        query.filters = _this.state.columns.filter(function (a) {
          return a.tableData.filterValue;
        }).map(function (a) {
          return {
            column: a,
            operator: '=',
            value: a.tableData.filterValue
          };
        });

        _this.onQueryChange(query);
      } else {
        _this.setState(_this.dataManager.getRenderState());
      }
    }, _this.props.options.debounceInterval);

    _this.onTreeExpandChanged = function (path, data) {
      _this.dataManager.changeTreeExpand(path);

      _this.setState(_this.dataManager.getRenderState(), function () {
        _this.props.onTreeExpandChange && _this.props.onTreeExpandChange(data, data.tableData.isTreeExpanded);
      });
    };

    _this.onToggleDetailPanel = function (path, render) {
      _this.dataManager.changeDetailPanelVisibility(path, render);

      _this.setState(_this.dataManager.getRenderState());
    };

    var calculatedProps = _this.getProps(props);

    _this.setDataManagerFields(calculatedProps, true);

    var renderState = _this.dataManager.getRenderState();

    _this.state = _extends({
      data: []
    }, renderState, {
      query: {
        filters: renderState.columns.filter(function (a) {
          return a.tableData.filterValue;
        }).map(function (a) {
          return {
            column: a,
            operator: '=',
            value: a.tableData.filterValue
          };
        }),
        orderBy: renderState.columns.find(function (a) {
          return a.tableData.id === renderState.orderBy;
        }),
        orderDirection: renderState.orderDirection,
        page: 0,
        pageSize: calculatedProps.options.pageSize,
        search: renderState.searchText,
        totalCount: 0
      },
      showAddRow: false
    });
    return _this;
  }

  var _proto = MaterialTable.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (this.props.searchText) {
      this.dataManager.changeSearchText(this.props.searchText);
    }

    this.setState(this.dataManager.getRenderState(), function () {
      if (_this2.isRemoteData()) {
        _this2.onQueryChange(_this2.state.query);
      }
    });
  };

  _proto.setDataManagerFields = function setDataManagerFields(props, isInit) {
    var defaultSortColumnIndex = -1;
    var defaultSortDirection = '';

    if (props) {
      defaultSortColumnIndex = props.columns.findIndex(function (a) {
        return a.defaultSort;
      });
      defaultSortDirection = defaultSortColumnIndex > -1 ? props.columns[defaultSortColumnIndex].defaultSort : '';
    }

    this.dataManager.setColumns(props.columns);
    this.dataManager.setDefaultExpanded(props.options.defaultExpanded);

    if (this.isRemoteData(props)) {
      this.dataManager.changeApplySearch(false);
      this.dataManager.changeApplyFilters(false);
    } else {
      this.dataManager.changeSearchText(props.searchText);
      this.dataManager.changeApplySearch(true);
      this.dataManager.changeApplyFilters(true);
      this.dataManager.setData(props.data);
    }

    isInit && this.dataManager.changeOrder(defaultSortColumnIndex, defaultSortDirection);
    isInit && this.dataManager.changeCurrentPage(props.options.initialPage ? props.options.initialPage : 0);
    isInit && this.dataManager.changePageSize(props.options.pageSize);
    isInit && this.dataManager.changePaging(props.options.paging);
    isInit && this.dataManager.changeParentFunc(props.parentChildData);
    this.dataManager.changeDetailPanelType(props.options.detailPanelType);
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    var props = this.getProps(nextProps);
    this.setDataManagerFields(props);
    this.setState(this.dataManager.getRenderState());
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var count = this.isRemoteData() ? this.state.query.totalCount : this.state.data.length;
    var currentPage = this.isRemoteData() ? this.state.query.page : this.state.currentPage;
    var pageSize = this.isRemoteData() ? this.state.query.pageSize : this.state.pageSize;

    if (count <= pageSize * currentPage && currentPage !== 0) {
      this.onChangePage(null, Math.max(0, Math.ceil(count / pageSize) - 1));
    }
  };

  _proto.getProps = function getProps(props) {
    var _this3 = this;

    var calculatedProps = _extends({}, props || this.props);

    var localization = calculatedProps.localization.body;
    calculatedProps.actions = [].concat(calculatedProps.actions || []);

    if (calculatedProps.editable) {
      if (calculatedProps.editable.onRowAdd) {
        calculatedProps.actions.push({
          icon: calculatedProps.icons.Add,
          tooltip: localization.addTooltip,
          isFreeAction: true,
          onClick: function onClick() {
            _this3.dataManager.changeRowEditing();

            _this3.setState(_extends({}, _this3.dataManager.getRenderState(), {
              showAddRow: !_this3.state.showAddRow
            }));
          }
        });
      }

      if (calculatedProps.editable.onRowUpdate) {
        calculatedProps.actions.push(function (rowData) {
          return {
            icon: calculatedProps.icons.Edit,
            tooltip: localization.editTooltip,
            disabled: calculatedProps.editable.isEditable && !calculatedProps.editable.isEditable(rowData),
            onClick: function onClick(e, rowData) {
              _this3.dataManager.changeRowEditing(rowData, 'update');

              _this3.setState(_extends({}, _this3.dataManager.getRenderState(), {
                showAddRow: false
              }));
            }
          };
        });
      }

      if (calculatedProps.editable.onRowDelete) {
        calculatedProps.actions.push(function (rowData) {
          return {
            icon: calculatedProps.icons.Delete,
            tooltip: localization.deleteTooltip,
            disabled: calculatedProps.editable.isDeletable && !calculatedProps.editable.isDeletable(rowData),
            onClick: function onClick(e, rowData) {
              _this3.dataManager.changeRowEditing(rowData, 'delete');

              _this3.setState(_extends({}, _this3.dataManager.getRenderState(), {
                showAddRow: false
              }));
            }
          };
        });
      }
    }

    calculatedProps.components = _extends({}, MaterialTable.defaultProps.components, {}, calculatedProps.components);
    calculatedProps.icons = _extends({}, MaterialTable.defaultProps.icons, {}, calculatedProps.icons);
    calculatedProps.options = _extends({}, MaterialTable.defaultProps.options, {}, calculatedProps.options);
    return calculatedProps;
  };

  _proto.renderFooter = function renderFooter() {
    var props = this.getProps();

    if (props.options.paging) {
      var localization = _extends({}, MaterialTable.defaultProps.localization.pagination, {}, this.props.localization.pagination);

      return React.createElement(core.Table, null, React.createElement(core.TableFooter, {
        style: {
          display: 'grid'
        }
      }, React.createElement(core.TableRow, null, React.createElement(props.components.Pagination, {
        classes: {
          root: props.classes.paginationRoot,
          toolbar: props.classes.paginationToolbar,
          caption: props.classes.paginationCaption,
          selectRoot: props.classes.paginationSelectRoot
        },
        style: {
          "float": props.theme.direction === 'rtl' ? '' : 'right',
          overflowX: 'auto'
        },
        colSpan: 3,
        count: this.isRemoteData() ? this.state.query.totalCount : this.state.data.length,
        icons: props.icons,
        rowsPerPage: this.state.pageSize,
        rowsPerPageOptions: props.options.pageSizeOptions,
        SelectProps: {
          renderValue: function renderValue(value) {
            return React.createElement("div", {
              style: {
                padding: '0px 5px'
              }
            }, value + ' ' + localization.labelRowsSelect + ' ');
          }
        },
        page: this.isRemoteData() ? this.state.query.page : this.state.currentPage,
        onChangePage: this.onChangePage,
        onChangeRowsPerPage: this.onChangeRowsPerPage,
        ActionsComponent: function ActionsComponent(subProps) {
          return props.options.paginationType === 'normal' ? React.createElement(MTablePagination, Object.assign({}, subProps, {
            icons: props.icons,
            localization: localization,
            showFirstLastPageButtons: props.options.showFirstLastPageButtons
          })) : React.createElement(MTableSteppedPagination, Object.assign({}, subProps, {
            icons: props.icons,
            localization: localization
          }));
        },
        labelDisplayedRows: function labelDisplayedRows(row) {
          return localization.labelDisplayedRows.replace('{from}', row.from).replace('{to}', row.to).replace('{count}', row.count);
        },
        labelRowsPerPage: localization.labelRowsPerPage
      }))));
    }
  };

  _proto.render = function render() {
    var _this4 = this;

    var props = this.getProps();
    return React.createElement(reactBeautifulDnd.DragDropContext, {
      onDragEnd: this.onDragEnd
    }, React.createElement(props.components.Container, {
      style: this.props.options.flexTable ? _extends({
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        position: 'relative'
      }, props.style) : _extends({
        position: 'relative'
      }, props.style)
    }, props.options.toolbar && React.createElement(props.components.Toolbar, {
      actions: props.actions,
      components: props.components,
      selectedRows: this.state.selectedCount > 0 ? this.state.originalData.filter(function (a) {
        return a.tableData.checked;
      }) : [],
      columns: this.state.columns,
      columnsButton: props.options.columnsButton,
      icons: props.icons,
      exportAllData: props.options.exportAllData,
      exportButton: props.options.exportButton,
      exportDelimiter: props.options.exportDelimiter,
      exportFileName: props.options.exportFileName,
      exportCsv: props.options.exportCsv,
      getFieldValue: this.dataManager.getFieldValue,
      data: this.state.data,
      renderData: this.state.renderData,
      search: props.options.search,
      showTitle: props.options.showTitle,
      showTextRowsSelected: props.options.showTextRowsSelected,
      toolbarButtonAlignment: props.options.toolbarButtonAlignment,
      searchFieldAlignment: props.options.searchFieldAlignment,
      searchText: this.state.searchText,
      searchFieldStyle: props.options.searchFieldStyle,
      title: props.title,
      onSearchChanged: this.onSearchChange,
      onColumnsChanged: this.onChangeColumnHidden,
      localization: _extends({}, MaterialTable.defaultProps.localization.toolbar, {}, this.props.localization.toolbar)
    }), props.options.grouping && React.createElement(props.components.Groupbar, {
      icons: props.icons,
      localization: _extends({}, MaterialTable.defaultProps.localization.grouping, {}, props.localization.grouping),
      groupColumns: this.state.columns.filter(function (col) {
        return col.tableData.groupOrder > -1;
      }).sort(function (col1, col2) {
        return col1.tableData.groupOrder - col2.tableData.groupOrder;
      }),
      onSortChanged: this.onChangeGroupOrder,
      onGroupRemoved: this.onGroupRemoved
    }), React.createElement(ScrollBar, {
      "double": props.options.doubleHorizontalScroll,
      flexTable: this.props.options.flexTable
    }, React.createElement(reactBeautifulDnd.Droppable, {
      droppableId: "headers",
      direction: "horizontal"
    }, function (provided, _snapshot) {
      return React.createElement("div", {
        ref: provided.innerRef
      }, React.createElement("div", {
        style: _this4.props.options.flexTable ? {} : {
          maxHeight: props.options.maxBodyHeight,
          overflowY: 'auto'
        }
      }, React.createElement(core.Table, null, props.options.header && React.createElement(props.components.Header, {
        localization: _extends({}, MaterialTable.defaultProps.localization.header, {}, _this4.props.localization.header),
        columns: _this4.state.columns,
        hasSelection: props.options.selection,
        headerStyle: props.options.headerStyle,
        icons: props.icons,
        selectedCount: _this4.state.selectedCount,
        dataCount: props.parentChildData ? _this4.state.treefiedDataLength : _this4.state.data.length,
        hasDetailPanel: Boolean(props.detailPanel),
        detailPanelColumnAlignment: props.options.detailPanelColumnAlignment,
        showActionsColumn: props.actions && props.actions.filter(function (a) {
          return !a.isFreeAction && !_this4.props.options.selection;
        }).length > 0,
        showSelectAllCheckbox: props.options.showSelectAllCheckbox,
        orderBy: _this4.state.orderBy,
        orderDirection: _this4.state.orderDirection,
        onAllSelected: _this4.onAllSelected,
        onOrderChange: _this4.onChangeOrder,
        actionsHeaderIndex: props.options.actionsColumnIndex,
        sorting: props.options.sorting,
        grouping: props.options.grouping,
        isTreeData: _this4.props.parentChildData !== undefined
      }), React.createElement(props.components.Body, {
        actions: props.actions,
        components: props.components,
        icons: props.icons,
        renderData: _this4.state.renderData,
        currentPage: _this4.state.currentPage,
        initialFormData: props.initialFormData,
        pageSize: _this4.state.pageSize,
        columns: _this4.state.columns,
        detailPanel: props.detailPanel,
        options: props.options,
        getFieldValue: _this4.dataManager.getFieldValue,
        isTreeData: _this4.props.parentChildData !== undefined,
        onFilterChanged: _this4.onFilterChange,
        onRowSelected: _this4.onRowSelected,
        onToggleDetailPanel: _this4.onToggleDetailPanel,
        onGroupExpandChanged: _this4.onGroupExpandChanged,
        onTreeExpandChanged: _this4.onTreeExpandChanged,
        onEditingCanceled: _this4.onEditingCanceled,
        onEditingApproved: _this4.onEditingApproved,
        localization: _extends({}, MaterialTable.defaultProps.localization.body, {}, _this4.props.localization.body),
        onRowClick: _this4.props.onRowClick,
        showAddRow: _this4.state.showAddRow,
        hasAnyEditingRow: Boolean(_this4.state.lastEditingRow || _this4.state.showAddRow),
        hasDetailPanel: Boolean(props.detailPanel),
        treeDataMaxLevel: _this4.state.treeDataMaxLevel
      }))), provided.placeholder);
    })), (this.state.isLoading || props.isLoading) && props.options.loadingType === 'linear' && React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%'
      }
    }, React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'
      }
    }, React.createElement(core.LinearProgress, null))), this.props.preFooterRow && this.props.preFooterRow, this.renderFooter(), (this.state.isLoading || props.isLoading) && props.options.loadingType === 'overlay' && React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 11
      }
    }, React.createElement(props.components.OverlayLoading, {
      theme: props.theme
    }))));
  };

  return MaterialTable;
}(React.Component);

var ScrollBar = function ScrollBar(_ref) {
  var _double = _ref["double"],
      flexTable = _ref.flexTable,
      children = _ref.children;

  if (_double) {
    return React.createElement(DoubleScrollbar, null, children);
  } else {
    return React.createElement("div", {
      style: flexTable ? {
        height: 0,
        flex: '2 1 auto',
        overflow: 'auto'
      } : {
        overflowX: 'auto'
      }
    }, children);
  }
};

MaterialTable.defaultProps = defaultProps;
MaterialTable.propTypes = propTypes;

var styles$2 = function styles() {
  return {
    paginationRoot: {
      width: '100%'
    },
    paginationToolbar: {
      padding: 0,
      width: '100%'
    },
    paginationCaption: {
      display: 'none'
    },
    paginationSelectRoot: {
      margin: 0
    }
  };
};

var AdvancedMaterialTable =
/*#__PURE__*/
core.withStyles(styles$2, {
  withTheme: true
})(function (props) {
  return React.createElement(MaterialTable, Object.assign({}, props, {
    ref: props.tableRef
  }));
});

exports.AdvancedMaterialTable = AdvancedMaterialTable;
exports.MTableAction = MTableAction;
exports.MTableActions = MTableActions;
exports.MTableBody = MTableBody;
exports.MTableBodyRow = MTableBodyRow;
exports.MTableCell = MTableCell;
exports.MTableEditField = MTableEditField;
exports.MTableEditRow = MTableEditRow;
exports.MTableFilterRow = MTableFilterRow;
exports.MTableGroupRow = MTableGroupRow;
exports.MTableGroupbar = MTableGroupbar;
exports.MTableHeader = MTableHeader;
exports.MTablePagination = MTablePagination;
exports.MTableSteppedPagination = MTableSteppedPagination;
exports.MTableToolbar = MTableToolbar;
//# sourceMappingURL=material-ui-advanced-table.cjs.development.js.map
