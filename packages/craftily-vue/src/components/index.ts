import Alert from './Alert/Alert.vue';
import Avatar from './Avatar/Avatar.vue';
import Badge from './Badge/Badge.vue';
import Button from './Button/Button.vue';
import ButtonGroup from './ButtonGroup.vue';
import Checkbox from './Checkbox/Checkbox.vue';
import Footer from './Footer/Footer.vue';
import FooterBrand from './Footer/FooterBrand.vue';
import FooterNavGroup from './Footer/FooterNavGroup.vue';
import FooterLink from './Footer/FooterLink.vue';
import FooterNavigation from './Footer/FooterNavigation.vue';
import FooterSocial from './Footer/FooterSocial.vue';
import FooterSocialLink from './Footer/FooterSocialLink.vue';
import FooterCopyright from './Footer/FooterCopyright.vue';
import Header from './Header/Header.vue';
import HeaderBrand from './Header/HeaderBrand.vue';
import HeaderNav from './Header/HeaderNav.vue';
import HeaderNavItem from './Header/HeaderNavItem.vue';
import HeaderActions from './Header/HeaderActions.vue';
import ImageEditor from './ImageEditor.vue';
import Input from './Input/Input.vue';
import Modal from './Modal/Modal.vue';
import Radio from './Radio/Radio.vue';
import RadioGroup from './Radio/RadioGroup.vue';
import Select from './Select/Select.vue';
import Option from './Select/Option.vue';
import Spinner from './Spinner/Spinner.vue';
import Switch from './Switch/Switch.vue';
import Tabs from './Tabs/Tabs.vue';
import Tooltip from './Tooltip/Tooltip.vue';
import { Card, CardTitle, CardBody, CardActions } from './Card';
import type { TabItem as OriginalTabItem, TabsProps as OriginalTabsProps } from './Tabs/Tabs.vue';

export {
  Alert,
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardTitle,
  CardBody,
  CardActions,
  ImageEditor,
  Checkbox,
  Footer,
  FooterBrand,
  FooterNavGroup,
  FooterLink,
  FooterNavigation,
  FooterSocial,
  FooterSocialLink,
  FooterCopyright,
  Header,
  HeaderBrand,
  HeaderNav,
  HeaderNavItem,
  HeaderActions,
  Input,
  Modal,
  Radio,
  RadioGroup,
  Select,
  Option,
  Spinner,
  Switch,
  Tabs,
  Tooltip,
};

export type { ButtonProps } from './Button/Button.vue';
export type { CheckboxProps } from './Checkbox/Checkbox.vue';
export type { InputProps } from './Input/Input.vue';
export type { ModalProps } from './Modal/types';
export type { RadioProps } from './Radio/Radio.vue';
export type { RadioGroupProps } from './Radio/RadioGroup.vue';
export type { SelectProps } from './Select/Select.vue';
export type { OptionProps } from './Select/Option.vue';
export type { SpinnerProps } from './Spinner/Spinner.vue';
export type { SwitchProps } from './Switch/Switch.vue';
export type { TooltipProps } from './Tooltip/Tooltip.vue';

// Explicitly re-exporting Tabs types
export type TabItem = OriginalTabItem;
export type TabsProps = OriginalTabsProps;
