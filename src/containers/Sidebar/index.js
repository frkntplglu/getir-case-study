import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllCompanies } from "../../actions/companiesActions";
import { getAllTags } from "../../actions/tagsActions";
import SpinnerIcon from "../../components/Icons/Spinner";
import ScrollableContent from "../../components/ScrollableContent";
import SidebarBox from "../../components/SidebarBox";
import Alert from "../../components/UI/Alert";
import Checkbox from "../../components/UI/Checkbox";
import Input from "../../components/UI/Input";
import Radio from "../../components/UI/Radio";
import theme from "../../styles/theme";

const SORTING = [
  { id: 1, value: "Price low to high" },
  { id: 2, value: "Price high to low" },
  { id: 3, value: "New to old" },
  { id: 4, value: "Old to new" },
];

const SidebarWrapper = styled.aside`
  margin-right: 16px;
  max-width: 100%;
  width: 296px;
  flex-shrink: 0;
  position: sticky;
  top: 116px;
`;

function Sidebar() {
  const {
    loading: loadingCompanies,
    items: companies,
    error: companiesError,
  } = useSelector((state) => state.companiesList);
  const {
    loading: loadingTags,
    items: tags,
    error: tagsError,
  } = useSelector((state) => state.tagsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCompanies());
    dispatch(getAllTags());
  }, [dispatch]);
  const handleInputChange = () => {};
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <SidebarWrapper>
      <SidebarBox title="Sorting">
        {SORTING?.map((sort) => (
          <Radio
            key={sort.id}
            name="sorting"
            labelText={sort.value}
            value={sort.id}
            handleRadioChange={handleChange}
            isDisabled={false}
          />
        ))}
      </SidebarBox>
      <SidebarBox title="Brands">
        <Input
          value=""
          placeholder="Search brand"
          handleOnChange={handleInputChange}
        />
        <ScrollableContent>
          {companiesError ? <Alert type="error">{companiesError}</Alert> : null}
          {loadingCompanies ? (
            <SpinnerIcon width={64} height={64} fill={theme.colors.mainColor} />
          ) : (
            companies.map((company) => (
              <Checkbox
                key={company.slug}
                labelText={company.name}
                value={company.slug}
                handleOnChange={handleChange}
                isDisabled={false}
              />
            ))
          )}
        </ScrollableContent>
      </SidebarBox>
      <SidebarBox title="Tags">
        <Input
          value=""
          placeholder="Search tag"
          handleOnChange={handleInputChange}
        />
        <ScrollableContent>
          {tagsError ? <Alert type="error">{companiesError}</Alert> : null}
          {loadingTags ? (
            <SpinnerIcon width={64} height={64} fill={theme.colors.mainColor} />
          ) : (
            tags.map((tag) => (
              <Checkbox
                key={tag}
                labelText={tag}
                value={tag}
                handleOnChange={handleChange}
                isDisabled={false}
              />
            ))
          )}
        </ScrollableContent>
      </SidebarBox>
    </SidebarWrapper>
  );
}

export default Sidebar;
