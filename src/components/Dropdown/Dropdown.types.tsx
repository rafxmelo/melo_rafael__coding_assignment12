export interface DropdownProps {
  options: { label: string; value: string }[];
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
